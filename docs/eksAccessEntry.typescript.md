# `eksAccessEntry` Submodule <a name="`eksAccessEntry` Submodule" id="@cdktf/provider-aws.eksAccessEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksAccessEntry <a name="EksAccessEntry" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry aws_eks_access_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

new eksAccessEntry.EksAccessEntry(scope: Construct, id: string, config: EksAccessEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig">EksAccessEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig">EksAccessEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetKubernetesGroups">resetKubernetesGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.putTimeouts"></a>

```typescript
public putTimeouts(value: EksAccessEntryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubernetesGroups` <a name="resetKubernetesGroups" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetKubernetesGroups"></a>

```typescript
public resetKubernetesGroups(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EksAccessEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isConstruct"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

eksAccessEntry.EksAccessEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isTerraformElement"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

eksAccessEntry.EksAccessEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isTerraformResource"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

eksAccessEntry.EksAccessEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.generateConfigForImport"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

eksAccessEntry.EksAccessEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EksAccessEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksAccessEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksAccessEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksAccessEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.accessEntryArn">accessEntryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference">EksAccessEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.kubernetesGroupsInput">kubernetesGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.principalArnInput">principalArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.kubernetesGroups">kubernetesGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.principalArn">principalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessEntryArn`<sup>Required</sup> <a name="accessEntryArn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.accessEntryArn"></a>

```typescript
public readonly accessEntryArn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.timeouts"></a>

```typescript
public readonly timeouts: EksAccessEntryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference">EksAccessEntryTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesGroupsInput`<sup>Optional</sup> <a name="kubernetesGroupsInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.kubernetesGroupsInput"></a>

```typescript
public readonly kubernetesGroupsInput: string[];
```

- *Type:* string[]

---

##### `principalArnInput`<sup>Optional</sup> <a name="principalArnInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.principalArnInput"></a>

```typescript
public readonly principalArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EksAccessEntryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesGroups`<sup>Required</sup> <a name="kubernetesGroups" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.kubernetesGroups"></a>

```typescript
public readonly kubernetesGroups: string[];
```

- *Type:* string[]

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksAccessEntryConfig <a name="EksAccessEntryConfig" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.Initializer"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

const eksAccessEntryConfig: eksAccessEntry.EksAccessEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#cluster_name EksAccessEntry#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.principalArn">principalArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#principal_arn EksAccessEntry#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#id EksAccessEntry#id}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.kubernetesGroups">kubernetesGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#kubernetes_groups EksAccessEntry#kubernetes_groups}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#tags EksAccessEntry#tags}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#tags_all EksAccessEntry#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#type EksAccessEntry#type}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#user_name EksAccessEntry#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#cluster_name EksAccessEntry#cluster_name}.

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#principal_arn EksAccessEntry#principal_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#id EksAccessEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesGroups`<sup>Optional</sup> <a name="kubernetesGroups" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.kubernetesGroups"></a>

```typescript
public readonly kubernetesGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#kubernetes_groups EksAccessEntry#kubernetes_groups}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#region EksAccessEntry#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#tags EksAccessEntry#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#tags_all EksAccessEntry#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksAccessEntryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#timeouts EksAccessEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#type EksAccessEntry#type}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#user_name EksAccessEntry#user_name}.

---

### EksAccessEntryTimeouts <a name="EksAccessEntryTimeouts" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts.Initializer"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

const eksAccessEntryTimeouts: eksAccessEntry.EksAccessEntryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#create EksAccessEntry#create}. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#delete EksAccessEntry#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#create EksAccessEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/eks_access_entry#delete EksAccessEntry#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksAccessEntryTimeoutsOutputReference <a name="EksAccessEntryTimeoutsOutputReference" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.Initializer"></a>

```typescript
import { eksAccessEntry } from '@cdktf/provider-aws'

new eksAccessEntry.EksAccessEntryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksAccessEntryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.eksAccessEntry.EksAccessEntryTimeouts">EksAccessEntryTimeouts</a>

---



