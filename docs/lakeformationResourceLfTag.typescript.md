# `lakeformationResourceLfTag` Submodule <a name="`lakeformationResourceLfTag` Submodule" id="@cdktf/provider-aws.lakeformationResourceLfTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResourceLfTag <a name="LakeformationResourceLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag aws_lakeformation_resource_lf_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTag(scope: Construct, id: string, config?: LakeformationResourceLfTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig">LakeformationResourceLfTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig">LakeformationResourceLfTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetLfTag">resetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putDatabase"></a>

```typescript
public putDatabase(value: IResolvable | LakeformationResourceLfTagDatabase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putDatabase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putLfTag"></a>

```typescript
public putLfTag(value: IResolvable | LakeformationResourceLfTagLfTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putLfTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTable"></a>

```typescript
public putTable(value: IResolvable | LakeformationResourceLfTagTable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTableWithColumns"></a>

```typescript
public putTableWithColumns(value: IResolvable | LakeformationResourceLfTagTableWithColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTableWithColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts"></a>

```typescript
public putTimeouts(value: LakeformationResourceLfTagTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetLfTag` <a name="resetLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetLfTag"></a>

```typescript
public resetLfTag(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTableWithColumns"></a>

```typescript
public resetTableWithColumns(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationResourceLfTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakeformationResourceLfTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationResourceLfTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationResourceLfTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationResourceLfTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList">LakeformationResourceLfTagDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList">LakeformationResourceLfTagLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList">LakeformationResourceLfTagTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList">LakeformationResourceLfTagTableWithColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference">LakeformationResourceLfTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.databaseInput">databaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTagInput">lfTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableInput">tableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.database"></a>

```typescript
public readonly database: LakeformationResourceLfTagDatabaseList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList">LakeformationResourceLfTagDatabaseList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTag"></a>

```typescript
public readonly lfTag: LakeformationResourceLfTagLfTagList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList">LakeformationResourceLfTagLfTagList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.table"></a>

```typescript
public readonly table: LakeformationResourceLfTagTableList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList">LakeformationResourceLfTagTableList</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationResourceLfTagTableWithColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList">LakeformationResourceLfTagTableWithColumnsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeouts"></a>

```typescript
public readonly timeouts: LakeformationResourceLfTagTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference">LakeformationResourceLfTagTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | LakeformationResourceLfTagDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTagInput"></a>

```typescript
public readonly lfTagInput: IResolvable | LakeformationResourceLfTagLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableInput"></a>

```typescript
public readonly tableInput: IResolvable | LakeformationResourceLfTagTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumnsInput"></a>

```typescript
public readonly tableWithColumnsInput: IResolvable | LakeformationResourceLfTagTableWithColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LakeformationResourceLfTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceLfTagConfig <a name="LakeformationResourceLfTagConfig" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagConfig: lakeformationResourceLfTag.LakeformationResourceLfTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.database">database</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lfTag">lfTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.table">table</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]</code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.tableWithColumns">tableWithColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]</code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.database"></a>

```typescript
public readonly database: IResolvable | LakeformationResourceLfTagDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#database LakeformationResourceLfTag#database}

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lfTag"></a>

```typescript
public readonly lfTag: IResolvable | LakeformationResourceLfTagLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]

lf_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#lf_tag LakeformationResourceLfTag#lf_tag}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.table"></a>

```typescript
public readonly table: IResolvable | LakeformationResourceLfTagTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#table LakeformationResourceLfTag#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: IResolvable | LakeformationResourceLfTagTableWithColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]

table_with_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#table_with_columns LakeformationResourceLfTag#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LakeformationResourceLfTagTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#timeouts LakeformationResourceLfTag#timeouts}

---

### LakeformationResourceLfTagDatabase <a name="LakeformationResourceLfTagDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagDatabase: lakeformationResourceLfTag.LakeformationResourceLfTagDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

### LakeformationResourceLfTagLfTag <a name="LakeformationResourceLfTagLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagLfTag: lakeformationResourceLfTag.LakeformationResourceLfTagLfTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#key LakeformationResourceLfTag#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#value LakeformationResourceLfTag#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#key LakeformationResourceLfTag#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#value LakeformationResourceLfTag#value}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

### LakeformationResourceLfTagTable <a name="LakeformationResourceLfTagTable" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagTable: lakeformationResourceLfTag.LakeformationResourceLfTagTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#wildcard LakeformationResourceLfTag#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#wildcard LakeformationResourceLfTag#wildcard}.

---

### LakeformationResourceLfTagTableWithColumns <a name="LakeformationResourceLfTagTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagTableWithColumns: lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#column_names LakeformationResourceLfTag#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnWildcard">columnWildcard</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]</code> | column_wildcard block. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#column_names LakeformationResourceLfTag#column_names}.

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: IResolvable | LakeformationResourceLfTagTableWithColumnsColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#column_wildcard LakeformationResourceLfTag#column_wildcard}

---

### LakeformationResourceLfTagTableWithColumnsColumnWildcard <a name="LakeformationResourceLfTagTableWithColumnsColumnWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagTableWithColumnsColumnWildcard: lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#excluded_column_names LakeformationResourceLfTag#excluded_column_names}. |

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#excluded_column_names LakeformationResourceLfTag#excluded_column_names}.

---

### LakeformationResourceLfTagTimeouts <a name="LakeformationResourceLfTagTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

const lakeformationResourceLfTagTimeouts: lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#create LakeformationResourceLfTag#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/lakeformation_resource_lf_tag#delete LakeformationResourceLfTag#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationResourceLfTagDatabaseList <a name="LakeformationResourceLfTagDatabaseList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.get"></a>

```typescript
public get(index: number): LakeformationResourceLfTagDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>[]

---


### LakeformationResourceLfTagDatabaseOutputReference <a name="LakeformationResourceLfTagDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagDatabase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>

---


### LakeformationResourceLfTagLfTagList <a name="LakeformationResourceLfTagLfTagList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.get"></a>

```typescript
public get(index: number): LakeformationResourceLfTagLfTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>[]

---


### LakeformationResourceLfTagLfTagOutputReference <a name="LakeformationResourceLfTagLfTagOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagLfTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>

---


### LakeformationResourceLfTagTableList <a name="LakeformationResourceLfTagTableList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.get"></a>

```typescript
public get(index: number): LakeformationResourceLfTagTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>[]

---


### LakeformationResourceLfTagTableOutputReference <a name="LakeformationResourceLfTagTableOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>

---


### LakeformationResourceLfTagTableWithColumnsColumnWildcardList <a name="LakeformationResourceLfTagTableWithColumnsColumnWildcardList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.get"></a>

```typescript
public get(index: number): LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTableWithColumnsColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]

---


### LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference <a name="LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTableWithColumnsColumnWildcard;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>

---


### LakeformationResourceLfTagTableWithColumnsList <a name="LakeformationResourceLfTagTableWithColumnsList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.get"></a>

```typescript
public get(index: number): LakeformationResourceLfTagTableWithColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTableWithColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>[]

---


### LakeformationResourceLfTagTableWithColumnsOutputReference <a name="LakeformationResourceLfTagTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.putColumnWildcard">putColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnWildcard">resetColumnWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnWildcard` <a name="putColumnWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.putColumnWildcard"></a>

```typescript
public putColumnWildcard(value: IResolvable | LakeformationResourceLfTagTableWithColumnsColumnWildcard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetColumnWildcard` <a name="resetColumnWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnWildcard"></a>

```typescript
public resetColumnWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList">LakeformationResourceLfTagTableWithColumnsColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcardInput">columnWildcardInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationResourceLfTagTableWithColumnsColumnWildcardList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList">LakeformationResourceLfTagTableWithColumnsColumnWildcardList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `columnWildcardInput`<sup>Optional</sup> <a name="columnWildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```typescript
public readonly columnWildcardInput: IResolvable | LakeformationResourceLfTagTableWithColumnsColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTableWithColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>

---


### LakeformationResourceLfTagTimeoutsOutputReference <a name="LakeformationResourceLfTagTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTag } from '@cdktf/provider-aws'

new lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>

---



