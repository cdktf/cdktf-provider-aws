# `guarddutyFilter` Submodule <a name="`guarddutyFilter` Submodule" id="@cdktf/provider-aws.guarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyFilter <a name="GuarddutyFilter" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter aws_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

new guarddutyFilter.GuarddutyFilter(scope: Construct, id: string, config: GuarddutyFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig">GuarddutyFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig">GuarddutyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria">putFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFindingCriteria` <a name="putFindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria"></a>

```typescript
public putFindingCriteria(value: GuarddutyFilterFindingCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GuarddutyFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

guarddutyFilter.GuarddutyFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

guarddutyFilter.GuarddutyFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

guarddutyFilter.GuarddutyFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.generateConfigForImport"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

guarddutyFilter.GuarddutyFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GuarddutyFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GuarddutyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput">findingCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rankInput">rankInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rank">rank</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteria"></a>

```typescript
public readonly findingCriteria: GuarddutyFilterFindingCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `findingCriteriaInput`<sup>Optional</sup> <a name="findingCriteriaInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput"></a>

```typescript
public readonly findingCriteriaInput: GuarddutyFilterFindingCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rankInput"></a>

```typescript
public readonly rankInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rank"></a>

```typescript
public readonly rank: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyFilterConfig <a name="GuarddutyFilterConfig" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

const guarddutyFilterConfig: guarddutyFilter.GuarddutyFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.rank">rank</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#id GuarddutyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#tags_all GuarddutyFilter#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria"></a>

```typescript
public readonly findingCriteria: GuarddutyFilterFindingCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}.

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.rank"></a>

```typescript
public readonly rank: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#id GuarddutyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#region GuarddutyFilter#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#tags_all GuarddutyFilter#tags_all}.

---

### GuarddutyFilterFindingCriteria <a name="GuarddutyFilterFindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

const guarddutyFilterFindingCriteria: guarddutyFilter.GuarddutyFilterFindingCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion">criterion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]</code> | criterion block. |

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion"></a>

```typescript
public readonly criterion: IResolvable | GuarddutyFilterFindingCriteriaCriterion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]

criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#criterion GuarddutyFilter#criterion}

---

### GuarddutyFilterFindingCriteriaCriterion <a name="GuarddutyFilterFindingCriteriaCriterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

const guarddutyFilterFindingCriteriaCriterion: guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#field GuarddutyFilter#field}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo">equalTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#equals GuarddutyFilter#equals}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan">greaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#greater_than GuarddutyFilter#greater_than}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual">greaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan">lessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#less_than GuarddutyFilter#less_than}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual">lessThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals">notEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#not_equals GuarddutyFilter#not_equals}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#field GuarddutyFilter#field}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#equals GuarddutyFilter#equals}.

---

##### `greaterThan`<sup>Optional</sup> <a name="greaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan"></a>

```typescript
public readonly greaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#greater_than GuarddutyFilter#greater_than}.

---

##### `greaterThanOrEqual`<sup>Optional</sup> <a name="greaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual"></a>

```typescript
public readonly greaterThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}.

---

##### `lessThan`<sup>Optional</sup> <a name="lessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan"></a>

```typescript
public readonly lessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#less_than GuarddutyFilter#less_than}.

---

##### `lessThanOrEqual`<sup>Optional</sup> <a name="lessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual"></a>

```typescript
public readonly lessThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/guardduty_filter#not_equals GuarddutyFilter#not_equals}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyFilterFindingCriteriaCriterionList <a name="GuarddutyFilterFindingCriteriaCriterionList" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

new guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get"></a>

```typescript
public get(index: number): GuarddutyFilterFindingCriteriaCriterionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyFilterFindingCriteriaCriterion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]

---


### GuarddutyFilterFindingCriteriaCriterionOutputReference <a name="GuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

new guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan">resetGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual">resetGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan">resetLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual">resetLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetGreaterThan` <a name="resetGreaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan"></a>

```typescript
public resetGreaterThan(): void
```

##### `resetGreaterThanOrEqual` <a name="resetGreaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual"></a>

```typescript
public resetGreaterThanOrEqual(): void
```

##### `resetLessThan` <a name="resetLessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan"></a>

```typescript
public resetLessThan(): void
```

##### `resetLessThanOrEqual` <a name="resetLessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual"></a>

```typescript
public resetLessThanOrEqual(): void
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals"></a>

```typescript
public resetNotEquals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput">greaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput">greaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput">lessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput">lessThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">greaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">greaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">lessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">lessThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `greaterThanInput`<sup>Optional</sup> <a name="greaterThanInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput"></a>

```typescript
public readonly greaterThanInput: string;
```

- *Type:* string

---

##### `greaterThanOrEqualInput`<sup>Optional</sup> <a name="greaterThanOrEqualInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput"></a>

```typescript
public readonly greaterThanOrEqualInput: string;
```

- *Type:* string

---

##### `lessThanInput`<sup>Optional</sup> <a name="lessThanInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput"></a>

```typescript
public readonly lessThanInput: string;
```

- *Type:* string

---

##### `lessThanOrEqualInput`<sup>Optional</sup> <a name="lessThanOrEqualInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput"></a>

```typescript
public readonly lessThanOrEqualInput: string;
```

- *Type:* string

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput"></a>

```typescript
public readonly notEqualsInput: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `greaterThan`<sup>Required</sup> <a name="greaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```typescript
public readonly greaterThan: string;
```

- *Type:* string

---

##### `greaterThanOrEqual`<sup>Required</sup> <a name="greaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```typescript
public readonly greaterThanOrEqual: string;
```

- *Type:* string

---

##### `lessThan`<sup>Required</sup> <a name="lessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```typescript
public readonly lessThan: string;
```

- *Type:* string

---

##### `lessThanOrEqual`<sup>Required</sup> <a name="lessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```typescript
public readonly lessThanOrEqual: string;
```

- *Type:* string

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyFilterFindingCriteriaCriterion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>

---


### GuarddutyFilterFindingCriteriaOutputReference <a name="GuarddutyFilterFindingCriteriaOutputReference" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```typescript
import { guarddutyFilter } from '@cdktf/provider-aws'

new guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion">putCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriterion` <a name="putCriterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion"></a>

```typescript
public putCriterion(value: IResolvable | GuarddutyFilterFindingCriteriaCriterion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList">GuarddutyFilterFindingCriteriaCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput">criterionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```typescript
public readonly criterion: GuarddutyFilterFindingCriteriaCriterionList;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList">GuarddutyFilterFindingCriteriaCriterionList</a>

---

##### `criterionInput`<sup>Optional</sup> <a name="criterionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```typescript
public readonly criterionInput: IResolvable | GuarddutyFilterFindingCriteriaCriterion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyFilterFindingCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---



