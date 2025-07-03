# `elasticacheReservedCacheNode` Submodule <a name="`elasticacheReservedCacheNode` Submodule" id="@cdktf/provider-aws.elasticacheReservedCacheNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReservedCacheNode <a name="ElasticacheReservedCacheNode" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node aws_elasticache_reserved_cache_node}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

new elasticacheReservedCacheNode.ElasticacheReservedCacheNode(scope: Construct, id: string, config: ElasticacheReservedCacheNodeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig">ElasticacheReservedCacheNodeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig">ElasticacheReservedCacheNodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount">resetCacheNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticacheReservedCacheNodeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---

##### `resetCacheNodeCount` <a name="resetCacheNodeCount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount"></a>

```typescript
public resetCacheNodeCount(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheReservedCacheNode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheReservedCacheNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheReservedCacheNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType">cacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice">fixedPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType">offeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription">productDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges">recurringCharges</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice">usagePrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput">cacheNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput">reservedCacheNodesOfferingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount">cacheNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId">reservedCacheNodesOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType"></a>

```typescript
public readonly cacheNodeType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `fixedPrice`<sup>Required</sup> <a name="fixedPrice" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice"></a>

```typescript
public readonly fixedPrice: number;
```

- *Type:* number

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType"></a>

```typescript
public readonly offeringType: string;
```

- *Type:* string

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription"></a>

```typescript
public readonly productDescription: string;
```

- *Type:* string

---

##### `recurringCharges`<sup>Required</sup> <a name="recurringCharges" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges"></a>

```typescript
public readonly recurringCharges: ElasticacheReservedCacheNodeRecurringChargesList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheReservedCacheNodeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a>

---

##### `usagePrice`<sup>Required</sup> <a name="usagePrice" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice"></a>

```typescript
public readonly usagePrice: number;
```

- *Type:* number

---

##### `cacheNodeCountInput`<sup>Optional</sup> <a name="cacheNodeCountInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput"></a>

```typescript
public readonly cacheNodeCountInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservedCacheNodesOfferingIdInput`<sup>Optional</sup> <a name="reservedCacheNodesOfferingIdInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput"></a>

```typescript
public readonly reservedCacheNodesOfferingIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ElasticacheReservedCacheNodeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---

##### `cacheNodeCount`<sup>Required</sup> <a name="cacheNodeCount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount"></a>

```typescript
public readonly cacheNodeCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="reservedCacheNodesOfferingId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId"></a>

```typescript
public readonly reservedCacheNodesOfferingId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReservedCacheNodeConfig <a name="ElasticacheReservedCacheNodeConfig" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

const elasticacheReservedCacheNodeConfig: elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId">reservedCacheNodesOfferingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount">cacheNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="reservedCacheNodesOfferingId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId"></a>

```typescript
public readonly reservedCacheNodesOfferingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}.

---

##### `cacheNodeCount`<sup>Optional</sup> <a name="cacheNodeCount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount"></a>

```typescript
public readonly cacheNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#region ElasticacheReservedCacheNode#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheReservedCacheNodeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}

---

### ElasticacheReservedCacheNodeRecurringCharges <a name="ElasticacheReservedCacheNodeRecurringCharges" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

const elasticacheReservedCacheNodeRecurringCharges: elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges = { ... }
```


### ElasticacheReservedCacheNodeTimeouts <a name="ElasticacheReservedCacheNodeTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

const elasticacheReservedCacheNodeTimeouts: elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#create ElasticacheReservedCacheNode#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#delete ElasticacheReservedCacheNode#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/elasticache_reserved_cache_node#update ElasticacheReservedCacheNode#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReservedCacheNodeRecurringChargesList <a name="ElasticacheReservedCacheNodeRecurringChargesList" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

new elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get"></a>

```typescript
public get(index: number): ElasticacheReservedCacheNodeRecurringChargesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ElasticacheReservedCacheNodeRecurringChargesOutputReference <a name="ElasticacheReservedCacheNodeRecurringChargesOutputReference" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

new elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount">recurringChargeAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency">recurringChargeFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurringChargeAmount`<sup>Required</sup> <a name="recurringChargeAmount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```typescript
public readonly recurringChargeAmount: number;
```

- *Type:* number

---

##### `recurringChargeFrequency`<sup>Required</sup> <a name="recurringChargeFrequency" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```typescript
public readonly recurringChargeFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReservedCacheNodeRecurringCharges;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a>

---


### ElasticacheReservedCacheNodeTimeoutsOutputReference <a name="ElasticacheReservedCacheNodeTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticacheReservedCacheNode } from '@cdktf/provider-aws'

new elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReservedCacheNodeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---



