# `datazoneGlossaryTerm` Submodule <a name="`datazoneGlossaryTerm` Submodule" id="@cdktf/provider-aws.datazoneGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGlossaryTerm <a name="DatazoneGlossaryTerm" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

new datazoneGlossaryTerm.DatazoneGlossaryTerm(scope: Construct, id: string, config: DatazoneGlossaryTermConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig">DatazoneGlossaryTermConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig">DatazoneGlossaryTermConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations">putTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier">resetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription">resetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription">resetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations">resetTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTermRelations` <a name="putTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations"></a>

```typescript
public putTermRelations(value: IResolvable | DatazoneGlossaryTermTermRelations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts"></a>

```typescript
public putTimeouts(value: DatazoneGlossaryTermTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `resetDomainIdentifier` <a name="resetDomainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier"></a>

```typescript
public resetDomainIdentifier(): void
```

##### `resetLongDescription` <a name="resetLongDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription"></a>

```typescript
public resetLongDescription(): void
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription"></a>

```typescript
public resetShortDescription(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTermRelations` <a name="resetTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations"></a>

```typescript
public resetTermRelations(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneGlossaryTerm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations">termRelations</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput">glossaryIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput">longDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput">termRelationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier">glossaryIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription">longDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription">shortDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `termRelations`<sup>Required</sup> <a name="termRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations"></a>

```typescript
public readonly termRelations: DatazoneGlossaryTermTermRelationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts"></a>

```typescript
public readonly timeouts: DatazoneGlossaryTermTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a>

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `glossaryIdentifierInput`<sup>Optional</sup> <a name="glossaryIdentifierInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput"></a>

```typescript
public readonly glossaryIdentifierInput: string;
```

- *Type:* string

---

##### `longDescriptionInput`<sup>Optional</sup> <a name="longDescriptionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput"></a>

```typescript
public readonly longDescriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput"></a>

```typescript
public readonly shortDescriptionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `termRelationsInput`<sup>Optional</sup> <a name="termRelationsInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput"></a>

```typescript
public readonly termRelationsInput: IResolvable | DatazoneGlossaryTermTermRelations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatazoneGlossaryTermTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `glossaryIdentifier`<sup>Required</sup> <a name="glossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier"></a>

```typescript
public readonly glossaryIdentifier: string;
```

- *Type:* string

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGlossaryTermConfig <a name="DatazoneGlossaryTermConfig" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

const datazoneGlossaryTermConfig: datazoneGlossaryTerm.DatazoneGlossaryTermConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier">glossaryIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription">longDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription">shortDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations">termRelations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]</code> | term_relations block. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `glossaryIdentifier`<sup>Required</sup> <a name="glossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier"></a>

```typescript
public readonly glossaryIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `termRelations`<sup>Optional</sup> <a name="termRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations"></a>

```typescript
public readonly termRelations: IResolvable | DatazoneGlossaryTermTermRelations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatazoneGlossaryTermTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

### DatazoneGlossaryTermTermRelations <a name="DatazoneGlossaryTermTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

const datazoneGlossaryTermTermRelations: datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies">classifies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA">isA</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}. |

---

##### `classifies`<sup>Optional</sup> <a name="classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies"></a>

```typescript
public readonly classifies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}.

---

##### `isA`<sup>Optional</sup> <a name="isA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA"></a>

```typescript
public readonly isA: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}.

---

### DatazoneGlossaryTermTimeouts <a name="DatazoneGlossaryTermTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

const datazoneGlossaryTermTimeouts: datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneGlossaryTermTermRelationsList <a name="DatazoneGlossaryTermTermRelationsList" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

new datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get"></a>

```typescript
public get(index: number): DatazoneGlossaryTermTermRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneGlossaryTermTermRelations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

---


### DatazoneGlossaryTermTermRelationsOutputReference <a name="DatazoneGlossaryTermTermRelationsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

new datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies">resetClassifies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA">resetIsA</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassifies` <a name="resetClassifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies"></a>

```typescript
public resetClassifies(): void
```

##### `resetIsA` <a name="resetIsA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA"></a>

```typescript
public resetIsA(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput">classifiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput">isAInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies">classifies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA">isA</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classifiesInput`<sup>Optional</sup> <a name="classifiesInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput"></a>

```typescript
public readonly classifiesInput: string[];
```

- *Type:* string[]

---

##### `isAInput`<sup>Optional</sup> <a name="isAInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput"></a>

```typescript
public readonly isAInput: string[];
```

- *Type:* string[]

---

##### `classifies`<sup>Required</sup> <a name="classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies"></a>

```typescript
public readonly classifies: string[];
```

- *Type:* string[]

---

##### `isA`<sup>Required</sup> <a name="isA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA"></a>

```typescript
public readonly isA: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneGlossaryTermTermRelations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>

---


### DatazoneGlossaryTermTimeoutsOutputReference <a name="DatazoneGlossaryTermTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer"></a>

```typescript
import { datazoneGlossaryTerm } from '@cdktf/provider-aws'

new datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneGlossaryTermTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---



