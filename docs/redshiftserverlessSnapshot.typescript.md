# `redshiftserverlessSnapshot` Submodule <a name="`redshiftserverlessSnapshot` Submodule" id="@cdktf/provider-aws.redshiftserverlessSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessSnapshot <a name="RedshiftserverlessSnapshot" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot aws_redshiftserverless_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer"></a>

```typescript
import { redshiftserverlessSnapshot } from '@cdktf/provider-aws'

new redshiftserverlessSnapshot.RedshiftserverlessSnapshot(scope: Construct, id: string, config: RedshiftserverlessSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig">RedshiftserverlessSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig">RedshiftserverlessSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftserverlessSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct"></a>

```typescript
import { redshiftserverlessSnapshot } from '@cdktf/provider-aws'

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement"></a>

```typescript
import { redshiftserverlessSnapshot } from '@cdktf/provider-aws'

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource"></a>

```typescript
import { redshiftserverlessSnapshot } from '@cdktf/provider-aws'

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport"></a>

```typescript
import { redshiftserverlessSnapshot } from '@cdktf/provider-aws'

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedshiftserverlessSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftserverlessSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftserverlessSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithProvisionedRestoreAccess">accountsWithProvisionedRestoreAccess</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithRestoreAccess">accountsWithRestoreAccess</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceArn">namespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountsWithProvisionedRestoreAccess`<sup>Required</sup> <a name="accountsWithProvisionedRestoreAccess" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithProvisionedRestoreAccess"></a>

```typescript
public readonly accountsWithProvisionedRestoreAccess: string[];
```

- *Type:* string[]

---

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="accountsWithRestoreAccess" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithRestoreAccess"></a>

```typescript
public readonly accountsWithRestoreAccess: string[];
```

- *Type:* string[]

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `namespaceArn`<sup>Required</sup> <a name="namespaceArn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceArn"></a>

```typescript
public readonly namespaceArn: string;
```

- *Type:* string

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: number;
```

- *Type:* number

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessSnapshotConfig <a name="RedshiftserverlessSnapshotConfig" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.Initializer"></a>

```typescript
import { redshiftserverlessSnapshot } from '@cdktf/provider-aws'

const redshiftserverlessSnapshotConfig: redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#region RedshiftserverlessSnapshot#region}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}.

---



