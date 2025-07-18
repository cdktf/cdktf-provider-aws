# `keyspacesKeyspace` Submodule <a name="`keyspacesKeyspace` Submodule" id="@cdktf/provider-aws.keyspacesKeyspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyspacesKeyspace <a name="KeyspacesKeyspace" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace aws_keyspaces_keyspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

new keyspacesKeyspace.KeyspacesKeyspace(scope: Construct, id: string, config: KeyspacesKeyspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig">KeyspacesKeyspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig">KeyspacesKeyspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putReplicationSpecification">putReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetReplicationSpecification">resetReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicationSpecification` <a name="putReplicationSpecification" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putReplicationSpecification"></a>

```typescript
public putReplicationSpecification(value: KeyspacesKeyspaceReplicationSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putReplicationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyspacesKeyspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicationSpecification` <a name="resetReplicationSpecification" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetReplicationSpecification"></a>

```typescript
public resetReplicationSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyspacesKeyspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isConstruct"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

keyspacesKeyspace.KeyspacesKeyspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyspacesKeyspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyspacesKeyspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyspacesKeyspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyspacesKeyspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecification">replicationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference">KeyspacesKeyspaceReplicationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference">KeyspacesKeyspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecificationInput">replicationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `replicationSpecification`<sup>Required</sup> <a name="replicationSpecification" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecification"></a>

```typescript
public readonly replicationSpecification: KeyspacesKeyspaceReplicationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference">KeyspacesKeyspaceReplicationSpecificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeouts"></a>

```typescript
public readonly timeouts: KeyspacesKeyspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference">KeyspacesKeyspaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationSpecificationInput`<sup>Optional</sup> <a name="replicationSpecificationInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecificationInput"></a>

```typescript
public readonly replicationSpecificationInput: KeyspacesKeyspaceReplicationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyspacesKeyspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyspacesKeyspaceConfig <a name="KeyspacesKeyspaceConfig" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.Initializer"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

const keyspacesKeyspaceConfig: keyspacesKeyspace.KeyspacesKeyspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#name KeyspacesKeyspace#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#id KeyspacesKeyspace#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.replicationSpecification">replicationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a></code> | replication_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#tags KeyspacesKeyspace#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#tags_all KeyspacesKeyspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#name KeyspacesKeyspace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#id KeyspacesKeyspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#region KeyspacesKeyspace#region}

---

##### `replicationSpecification`<sup>Optional</sup> <a name="replicationSpecification" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.replicationSpecification"></a>

```typescript
public readonly replicationSpecification: KeyspacesKeyspaceReplicationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

replication_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#replication_specification KeyspacesKeyspace#replication_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#tags KeyspacesKeyspace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#tags_all KeyspacesKeyspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyspacesKeyspaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#timeouts KeyspacesKeyspace#timeouts}

---

### KeyspacesKeyspaceReplicationSpecification <a name="KeyspacesKeyspaceReplicationSpecification" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.Initializer"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

const keyspacesKeyspaceReplicationSpecification: keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.regionList">regionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#region_list KeyspacesKeyspace#region_list}. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.replicationStrategy">replicationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#replication_strategy KeyspacesKeyspace#replication_strategy}. |

---

##### `regionList`<sup>Optional</sup> <a name="regionList" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.regionList"></a>

```typescript
public readonly regionList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#region_list KeyspacesKeyspace#region_list}.

---

##### `replicationStrategy`<sup>Optional</sup> <a name="replicationStrategy" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.replicationStrategy"></a>

```typescript
public readonly replicationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#replication_strategy KeyspacesKeyspace#replication_strategy}.

---

### KeyspacesKeyspaceTimeouts <a name="KeyspacesKeyspaceTimeouts" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.Initializer"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

const keyspacesKeyspaceTimeouts: keyspacesKeyspace.KeyspacesKeyspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#create KeyspacesKeyspace#create}. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#delete KeyspacesKeyspace#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#create KeyspacesKeyspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/keyspaces_keyspace#delete KeyspacesKeyspace#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyspacesKeyspaceReplicationSpecificationOutputReference <a name="KeyspacesKeyspaceReplicationSpecificationOutputReference" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

new keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetRegionList">resetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy">resetReplicationStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionList` <a name="resetRegionList" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetRegionList"></a>

```typescript
public resetRegionList(): void
```

##### `resetReplicationStrategy` <a name="resetReplicationStrategy" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy"></a>

```typescript
public resetReplicationStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionListInput">regionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput">replicationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionList">regionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy">replicationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionListInput"></a>

```typescript
public readonly regionListInput: string[];
```

- *Type:* string[]

---

##### `replicationStrategyInput`<sup>Optional</sup> <a name="replicationStrategyInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput"></a>

```typescript
public readonly replicationStrategyInput: string;
```

- *Type:* string

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionList"></a>

```typescript
public readonly regionList: string[];
```

- *Type:* string[]

---

##### `replicationStrategy`<sup>Required</sup> <a name="replicationStrategy" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy"></a>

```typescript
public readonly replicationStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyspacesKeyspaceReplicationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

---


### KeyspacesKeyspaceTimeoutsOutputReference <a name="KeyspacesKeyspaceTimeoutsOutputReference" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyspacesKeyspace } from '@cdktf/provider-aws'

new keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyspacesKeyspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

---



