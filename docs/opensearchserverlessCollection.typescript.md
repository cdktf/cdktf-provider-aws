# `opensearchserverlessCollection` Submodule <a name="`opensearchserverlessCollection` Submodule" id="@cdktf/provider-aws.opensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollection <a name="OpensearchserverlessCollection" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection aws_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

new opensearchserverlessCollection.OpensearchserverlessCollection(scope: Construct, id: string, config: OpensearchserverlessCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig">OpensearchserverlessCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig">OpensearchserverlessCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas">resetStandbyReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: OpensearchserverlessCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStandbyReplicas` <a name="resetStandbyReplicas" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas"></a>

```typescript
public resetStandbyReplicas(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchserverlessCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpensearchserverlessCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint">collectionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint">dashboardEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference">OpensearchserverlessCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput">standbyReplicasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas">standbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collectionEndpoint`<sup>Required</sup> <a name="collectionEndpoint" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint"></a>

```typescript
public readonly collectionEndpoint: string;
```

- *Type:* string

---

##### `dashboardEndpoint`<sup>Required</sup> <a name="dashboardEndpoint" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint"></a>

```typescript
public readonly dashboardEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchserverlessCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference">OpensearchserverlessCollectionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `standbyReplicasInput`<sup>Optional</sup> <a name="standbyReplicasInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput"></a>

```typescript
public readonly standbyReplicasInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpensearchserverlessCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas"></a>

```typescript
public readonly standbyReplicas: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionConfig <a name="OpensearchserverlessCollectionConfig" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.Initializer"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

const opensearchserverlessCollectionConfig: opensearchserverlessCollection.OpensearchserverlessCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name">name</a></code> | <code>string</code> | Name of the collection. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description">description</a></code> | <code>string</code> | Description of the collection. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas">standbyReplicas</a></code> | <code>string</code> | Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type">type</a></code> | <code>string</code> | Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#region OpensearchserverlessCollection#region}

---

##### `standbyReplicas`<sup>Optional</sup> <a name="standbyReplicas" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas"></a>

```typescript
public readonly standbyReplicas: string;
```

- *Type:* string

Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchserverlessCollectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#timeouts OpensearchserverlessCollection#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

### OpensearchserverlessCollectionTimeouts <a name="OpensearchserverlessCollectionTimeouts" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.Initializer"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

const opensearchserverlessCollectionTimeouts: opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#create OpensearchserverlessCollection#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/opensearchserverless_collection#delete OpensearchserverlessCollection#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionTimeoutsOutputReference <a name="OpensearchserverlessCollectionTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { opensearchserverlessCollection } from '@cdktf/provider-aws'

new opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserverlessCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---



