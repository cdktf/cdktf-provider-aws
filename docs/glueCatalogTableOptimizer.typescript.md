# `glueCatalogTableOptimizer` Submodule <a name="`glueCatalogTableOptimizer` Submodule" id="@cdktf/provider-aws.glueCatalogTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTableOptimizer <a name="GlueCatalogTableOptimizer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizer(scope: Construct, id: string, config: GlueCatalogTableOptimizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig">GlueCatalogTableOptimizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig">GlueCatalogTableOptimizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.putConfiguration"></a>

```typescript
public putConfiguration(value: IResolvable | GlueCatalogTableOptimizerConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.putConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlueCatalogTableOptimizer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlueCatalogTableOptimizer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCatalogTableOptimizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCatalogTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueCatalogTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList">GlueCatalogTableOptimizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configurationInput">configurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configuration"></a>

```typescript
public readonly configuration: GlueCatalogTableOptimizerConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList">GlueCatalogTableOptimizerConfigurationList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | GlueCatalogTableOptimizerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableOptimizerConfig <a name="GlueCatalogTableOptimizerConfig" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

const glueCatalogTableOptimizerConfig: glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.configuration">configuration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.configuration"></a>

```typescript
public readonly configuration: IResolvable | GlueCatalogTableOptimizerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#configuration GlueCatalogTableOptimizer#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#region GlueCatalogTableOptimizer#region}

---

### GlueCatalogTableOptimizerConfiguration <a name="GlueCatalogTableOptimizerConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

const glueCatalogTableOptimizerConfiguration: glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#enabled GlueCatalogTableOptimizer#enabled}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#role_arn GlueCatalogTableOptimizer#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.orphanFileDeletionConfiguration">orphanFileDeletionConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]</code> | orphan_file_deletion_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.retentionConfiguration">retentionConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]</code> | retention_configuration block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#enabled GlueCatalogTableOptimizer#enabled}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#role_arn GlueCatalogTableOptimizer#role_arn}.

---

##### `orphanFileDeletionConfiguration`<sup>Optional</sup> <a name="orphanFileDeletionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.orphanFileDeletionConfiguration"></a>

```typescript
public readonly orphanFileDeletionConfiguration: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]

orphan_file_deletion_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#orphan_file_deletion_configuration GlueCatalogTableOptimizer#orphan_file_deletion_configuration}

---

##### `retentionConfiguration`<sup>Optional</sup> <a name="retentionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.retentionConfiguration"></a>

```typescript
public readonly retentionConfiguration: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]

retention_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#retention_configuration GlueCatalogTableOptimizer#retention_configuration}

---

### GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration <a name="GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

const glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration: glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration">icebergConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]</code> | iceberg_configuration block. |

---

##### `icebergConfiguration`<sup>Optional</sup> <a name="icebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]

iceberg_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration GlueCatalogTableOptimizer#iceberg_configuration}

---

### GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration <a name="GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

const glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration: glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#location GlueCatalogTableOptimizer#location}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays">orphanFileRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#orphan_file_retention_period_in_days GlueCatalogTableOptimizer#orphan_file_retention_period_in_days}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#location GlueCatalogTableOptimizer#location}.

---

##### `orphanFileRetentionPeriodInDays`<sup>Optional</sup> <a name="orphanFileRetentionPeriodInDays" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays"></a>

```typescript
public readonly orphanFileRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#orphan_file_retention_period_in_days GlueCatalogTableOptimizer#orphan_file_retention_period_in_days}.

---

### GlueCatalogTableOptimizerConfigurationRetentionConfiguration <a name="GlueCatalogTableOptimizerConfigurationRetentionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

const glueCatalogTableOptimizerConfigurationRetentionConfiguration: glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration">icebergConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]</code> | iceberg_configuration block. |

---

##### `icebergConfiguration`<sup>Optional</sup> <a name="icebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]

iceberg_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration GlueCatalogTableOptimizer#iceberg_configuration}

---

### GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration <a name="GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

const glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration: glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles">cleanExpiredFiles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#clean_expired_files GlueCatalogTableOptimizer#clean_expired_files}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain">numberOfSnapshotsToRetain</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#number_of_snapshots_to_retain GlueCatalogTableOptimizer#number_of_snapshots_to_retain}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#snapshot_retention_period_in_days GlueCatalogTableOptimizer#snapshot_retention_period_in_days}. |

---

##### `cleanExpiredFiles`<sup>Optional</sup> <a name="cleanExpiredFiles" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles"></a>

```typescript
public readonly cleanExpiredFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#clean_expired_files GlueCatalogTableOptimizer#clean_expired_files}.

---

##### `numberOfSnapshotsToRetain`<sup>Optional</sup> <a name="numberOfSnapshotsToRetain" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain"></a>

```typescript
public readonly numberOfSnapshotsToRetain: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#number_of_snapshots_to_retain GlueCatalogTableOptimizer#number_of_snapshots_to_retain}.

---

##### `snapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDays" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_table_optimizer#snapshot_retention_period_in_days GlueCatalogTableOptimizer#snapshot_retention_period_in_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTableOptimizerConfigurationList <a name="GlueCatalogTableOptimizerConfigurationList" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOptimizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>[]

---


### GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList <a name="GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]

---


### GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference <a name="GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays">resetOrphanFileRetentionPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetOrphanFileRetentionPeriodInDays` <a name="resetOrphanFileRetentionPeriodInDays" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays"></a>

```typescript
public resetOrphanFileRetentionPeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput">orphanFileRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays">orphanFileRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `orphanFileRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="orphanFileRetentionPeriodInDaysInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput"></a>

```typescript
public readonly orphanFileRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `orphanFileRetentionPeriodInDays`<sup>Required</sup> <a name="orphanFileRetentionPeriodInDays" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays"></a>

```typescript
public readonly orphanFileRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---


### GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList <a name="GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]

---


### GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference <a name="GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration">putIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration">resetIcebergConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergConfiguration` <a name="putIcebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration"></a>

```typescript
public putIcebergConfiguration(value: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]

---

##### `resetIcebergConfiguration` <a name="resetIcebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration"></a>

```typescript
public resetIcebergConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput">icebergConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList</a>

---

##### `icebergConfigurationInput`<sup>Optional</sup> <a name="icebergConfigurationInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```typescript
public readonly icebergConfigurationInput: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---


### GlueCatalogTableOptimizerConfigurationOutputReference <a name="GlueCatalogTableOptimizerConfigurationOutputReference" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration">putOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.putRetentionConfiguration">putRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration">resetOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resetRetentionConfiguration">resetRetentionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrphanFileDeletionConfiguration` <a name="putOrphanFileDeletionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration"></a>

```typescript
public putOrphanFileDeletionConfiguration(value: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]

---

##### `putRetentionConfiguration` <a name="putRetentionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.putRetentionConfiguration"></a>

```typescript
public putRetentionConfiguration(value: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.putRetentionConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]

---

##### `resetOrphanFileDeletionConfiguration` <a name="resetOrphanFileDeletionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration"></a>

```typescript
public resetOrphanFileDeletionConfiguration(): void
```

##### `resetRetentionConfiguration` <a name="resetRetentionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resetRetentionConfiguration"></a>

```typescript
public resetRetentionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration">orphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.retentionConfiguration">retentionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList">GlueCatalogTableOptimizerConfigurationRetentionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput">orphanFileDeletionConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput">retentionConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orphanFileDeletionConfiguration`<sup>Required</sup> <a name="orphanFileDeletionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration"></a>

```typescript
public readonly orphanFileDeletionConfiguration: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList</a>

---

##### `retentionConfiguration`<sup>Required</sup> <a name="retentionConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.retentionConfiguration"></a>

```typescript
public readonly retentionConfiguration: GlueCatalogTableOptimizerConfigurationRetentionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList">GlueCatalogTableOptimizerConfigurationRetentionConfigurationList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orphanFileDeletionConfigurationInput`<sup>Optional</sup> <a name="orphanFileDeletionConfigurationInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput"></a>

```typescript
public readonly orphanFileDeletionConfigurationInput: IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>[]

---

##### `retentionConfigurationInput`<sup>Optional</sup> <a name="retentionConfigurationInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput"></a>

```typescript
public readonly retentionConfigurationInput: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>

---


### GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList <a name="GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]

---


### GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference <a name="GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles">resetCleanExpiredFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain">resetNumberOfSnapshotsToRetain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays">resetSnapshotRetentionPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCleanExpiredFiles` <a name="resetCleanExpiredFiles" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles"></a>

```typescript
public resetCleanExpiredFiles(): void
```

##### `resetNumberOfSnapshotsToRetain` <a name="resetNumberOfSnapshotsToRetain" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain"></a>

```typescript
public resetNumberOfSnapshotsToRetain(): void
```

##### `resetSnapshotRetentionPeriodInDays` <a name="resetSnapshotRetentionPeriodInDays" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays"></a>

```typescript
public resetSnapshotRetentionPeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput">cleanExpiredFilesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput">numberOfSnapshotsToRetainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput">snapshotRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles">cleanExpiredFiles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain">numberOfSnapshotsToRetain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cleanExpiredFilesInput`<sup>Optional</sup> <a name="cleanExpiredFilesInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput"></a>

```typescript
public readonly cleanExpiredFilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfSnapshotsToRetainInput`<sup>Optional</sup> <a name="numberOfSnapshotsToRetainInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput"></a>

```typescript
public readonly numberOfSnapshotsToRetainInput: number;
```

- *Type:* number

---

##### `snapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDaysInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput"></a>

```typescript
public readonly snapshotRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `cleanExpiredFiles`<sup>Required</sup> <a name="cleanExpiredFiles" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles"></a>

```typescript
public readonly cleanExpiredFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfSnapshotsToRetain`<sup>Required</sup> <a name="numberOfSnapshotsToRetain" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain"></a>

```typescript
public readonly numberOfSnapshotsToRetain: number;
```

- *Type:* number

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---


### GlueCatalogTableOptimizerConfigurationRetentionConfigurationList <a name="GlueCatalogTableOptimizerConfigurationRetentionConfigurationList" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>[]

---


### GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference <a name="GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer"></a>

```typescript
import { glueCatalogTableOptimizer } from '@cdktf/provider-aws'

new glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration">putIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration">resetIcebergConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergConfiguration` <a name="putIcebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration"></a>

```typescript
public putIcebergConfiguration(value: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]

---

##### `resetIcebergConfiguration` <a name="resetIcebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration"></a>

```typescript
public resetIcebergConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput">icebergConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList</a>

---

##### `icebergConfigurationInput`<sup>Optional</sup> <a name="icebergConfigurationInput" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```typescript
public readonly icebergConfigurationInput: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationRetentionConfiguration">GlueCatalogTableOptimizerConfigurationRetentionConfiguration</a>

---



