# `dmsReplicationConfig` Submodule <a name="`dmsReplicationConfig` Submodule" id="@cdktf/provider-aws.dmsReplicationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationConfig <a name="DmsReplicationConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config aws_dms_replication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

new dmsReplicationConfig.DmsReplicationConfig(scope: Construct, id: string, config: DmsReplicationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig">DmsReplicationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig">DmsReplicationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig">putComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings">resetReplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication">resetStartReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings">resetSupplementalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeConfig` <a name="putComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig"></a>

```typescript
public putComputeConfig(value: DmsReplicationConfigComputeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DmsReplicationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicationSettings` <a name="resetReplicationSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings"></a>

```typescript
public resetReplicationSettings(): void
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier"></a>

```typescript
public resetResourceIdentifier(): void
```

##### `resetStartReplication` <a name="resetStartReplication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication"></a>

```typescript
public resetStartReplication(): void
```

##### `resetSupplementalSettings` <a name="resetSupplementalSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings"></a>

```typescript
public resetSupplementalSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

dmsReplicationConfig.DmsReplicationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

dmsReplicationConfig.DmsReplicationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

dmsReplicationConfig.DmsReplicationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReplicationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReplicationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput">computeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput">replicationConfigIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput">replicationSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput">replicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput">sourceEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput">startReplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput">supplementalSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput">tableMappingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput">targetEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier">replicationConfigIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings">replicationSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType">replicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication">startReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings">supplementalSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings">tableMappings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn">targetEndpointArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `computeConfig`<sup>Required</sup> <a name="computeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig"></a>

```typescript
public readonly computeConfig: DmsReplicationConfigComputeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DmsReplicationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a>

---

##### `computeConfigInput`<sup>Optional</sup> <a name="computeConfigInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput"></a>

```typescript
public readonly computeConfigInput: DmsReplicationConfigComputeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationConfigIdentifierInput`<sup>Optional</sup> <a name="replicationConfigIdentifierInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput"></a>

```typescript
public readonly replicationConfigIdentifierInput: string;
```

- *Type:* string

---

##### `replicationSettingsInput`<sup>Optional</sup> <a name="replicationSettingsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput"></a>

```typescript
public readonly replicationSettingsInput: string;
```

- *Type:* string

---

##### `replicationTypeInput`<sup>Optional</sup> <a name="replicationTypeInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput"></a>

```typescript
public readonly replicationTypeInput: string;
```

- *Type:* string

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput"></a>

```typescript
public readonly resourceIdentifierInput: string;
```

- *Type:* string

---

##### `sourceEndpointArnInput`<sup>Optional</sup> <a name="sourceEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput"></a>

```typescript
public readonly sourceEndpointArnInput: string;
```

- *Type:* string

---

##### `startReplicationInput`<sup>Optional</sup> <a name="startReplicationInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput"></a>

```typescript
public readonly startReplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supplementalSettingsInput`<sup>Optional</sup> <a name="supplementalSettingsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput"></a>

```typescript
public readonly supplementalSettingsInput: string;
```

- *Type:* string

---

##### `tableMappingsInput`<sup>Optional</sup> <a name="tableMappingsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput"></a>

```typescript
public readonly tableMappingsInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetEndpointArnInput`<sup>Optional</sup> <a name="targetEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput"></a>

```typescript
public readonly targetEndpointArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DmsReplicationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationConfigIdentifier`<sup>Required</sup> <a name="replicationConfigIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier"></a>

```typescript
public readonly replicationConfigIdentifier: string;
```

- *Type:* string

---

##### `replicationSettings`<sup>Required</sup> <a name="replicationSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings"></a>

```typescript
public readonly replicationSettings: string;
```

- *Type:* string

---

##### `replicationType`<sup>Required</sup> <a name="replicationType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType"></a>

```typescript
public readonly replicationType: string;
```

- *Type:* string

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn"></a>

```typescript
public readonly sourceEndpointArn: string;
```

- *Type:* string

---

##### `startReplication`<sup>Required</sup> <a name="startReplication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication"></a>

```typescript
public readonly startReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supplementalSettings`<sup>Required</sup> <a name="supplementalSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings"></a>

```typescript
public readonly supplementalSettings: string;
```

- *Type:* string

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings"></a>

```typescript
public readonly tableMappings: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn"></a>

```typescript
public readonly targetEndpointArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationConfigComputeConfig <a name="DmsReplicationConfigComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.Initializer"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

const dmsReplicationConfigComputeConfig: dmsReplicationConfig.DmsReplicationConfigComputeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId">replicationSubnetGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers">dnsNameServers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits">maxCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits">minCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz">multiAz</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}. |

---

##### `replicationSubnetGroupId`<sup>Required</sup> <a name="replicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId"></a>

```typescript
public readonly replicationSubnetGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

##### `dnsNameServers`<sup>Optional</sup> <a name="dnsNameServers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers"></a>

```typescript
public readonly dnsNameServers: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

##### `maxCapacityUnits`<sup>Optional</sup> <a name="maxCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits"></a>

```typescript
public readonly maxCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

##### `minCapacityUnits`<sup>Optional</sup> <a name="minCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits"></a>

```typescript
public readonly minCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

### DmsReplicationConfigConfig <a name="DmsReplicationConfigConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.Initializer"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

const dmsReplicationConfigConfig: dmsReplicationConfig.DmsReplicationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier">replicationConfigIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType">replicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings">tableMappings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn">targetEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings">replicationSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication">startReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings">supplementalSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeConfig`<sup>Required</sup> <a name="computeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig"></a>

```typescript
public readonly computeConfig: DmsReplicationConfigComputeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `replicationConfigIdentifier`<sup>Required</sup> <a name="replicationConfigIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier"></a>

```typescript
public readonly replicationConfigIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}.

---

##### `replicationType`<sup>Required</sup> <a name="replicationType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType"></a>

```typescript
public readonly replicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}.

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn"></a>

```typescript
public readonly sourceEndpointArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}.

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings"></a>

```typescript
public readonly tableMappings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}.

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn"></a>

```typescript
public readonly targetEndpointArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#region DmsReplicationConfig#region}

---

##### `replicationSettings`<sup>Optional</sup> <a name="replicationSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings"></a>

```typescript
public readonly replicationSettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}.

---

##### `startReplication`<sup>Optional</sup> <a name="startReplication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication"></a>

```typescript
public readonly startReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}.

---

##### `supplementalSettings`<sup>Optional</sup> <a name="supplementalSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings"></a>

```typescript
public readonly supplementalSettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DmsReplicationConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}

---

### DmsReplicationConfigTimeouts <a name="DmsReplicationConfigTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.Initializer"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

const dmsReplicationConfigTimeouts: dmsReplicationConfig.DmsReplicationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationConfigComputeConfigOutputReference <a name="DmsReplicationConfigComputeConfigOutputReference" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

new dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers">resetDnsNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits">resetMaxCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits">resetMinCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetDnsNameServers` <a name="resetDnsNameServers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers"></a>

```typescript
public resetDnsNameServers(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMaxCapacityUnits` <a name="resetMaxCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits"></a>

```typescript
public resetMaxCapacityUnits(): void
```

##### `resetMinCapacityUnits` <a name="resetMinCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits"></a>

```typescript
public resetMinCapacityUnits(): void
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz"></a>

```typescript
public resetMultiAz(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput">dnsNameServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput">maxCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput">minCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput">multiAzInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput">replicationSubnetGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers">dnsNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits">maxCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits">minCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz">multiAz</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId">replicationSubnetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `dnsNameServersInput`<sup>Optional</sup> <a name="dnsNameServersInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput"></a>

```typescript
public readonly dnsNameServersInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `maxCapacityUnitsInput`<sup>Optional</sup> <a name="maxCapacityUnitsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput"></a>

```typescript
public readonly maxCapacityUnitsInput: number;
```

- *Type:* number

---

##### `minCapacityUnitsInput`<sup>Optional</sup> <a name="minCapacityUnitsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput"></a>

```typescript
public readonly minCapacityUnitsInput: number;
```

- *Type:* number

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `replicationSubnetGroupIdInput`<sup>Optional</sup> <a name="replicationSubnetGroupIdInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput"></a>

```typescript
public readonly replicationSubnetGroupIdInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `dnsNameServers`<sup>Required</sup> <a name="dnsNameServers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers"></a>

```typescript
public readonly dnsNameServers: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `maxCapacityUnits`<sup>Required</sup> <a name="maxCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits"></a>

```typescript
public readonly maxCapacityUnits: number;
```

- *Type:* number

---

##### `minCapacityUnits`<sup>Required</sup> <a name="minCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits"></a>

```typescript
public readonly minCapacityUnits: number;
```

- *Type:* number

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `replicationSubnetGroupId`<sup>Required</sup> <a name="replicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId"></a>

```typescript
public readonly replicationSubnetGroupId: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsReplicationConfigComputeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---


### DmsReplicationConfigTimeoutsOutputReference <a name="DmsReplicationConfigTimeoutsOutputReference" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { dmsReplicationConfig } from '@cdktf/provider-aws'

new dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReplicationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---



