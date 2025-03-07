# `kmsKey` Submodule <a name="`kmsKey` Submodule" id="@cdktf/provider-aws.kmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKey <a name="KmsKey" id="@cdktf/provider-aws.kmsKey.KmsKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

new kmsKey.KmsKey(scope: Construct, id: string, config?: KmsKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig">KmsKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig">KmsKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec">resetCustomerMasterKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId">resetCustomKeyStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays">resetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation">resetEnableKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion">resetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetRotationPeriodInDays">resetRotationPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetXksKeyId">resetXksKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsKey.KmsKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.kmsKey.KmsKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsKey.KmsKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsKey.KmsKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.kmsKey.KmsKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.kmsKey.KmsKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.kmsKey.KmsKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.kmsKey.KmsKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.kmsKey.KmsKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.kmsKey.KmsKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.kmsKey.KmsKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.kmsKey.KmsKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.kmsKey.KmsKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kmsKey.KmsKey.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsKey.KmsKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>

---

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck"></a>

```typescript
public resetBypassPolicyLockoutSafetyCheck(): void
```

##### `resetCustomerMasterKeySpec` <a name="resetCustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec"></a>

```typescript
public resetCustomerMasterKeySpec(): void
```

##### `resetCustomKeyStoreId` <a name="resetCustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId"></a>

```typescript
public resetCustomKeyStoreId(): void
```

##### `resetDeletionWindowInDays` <a name="resetDeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays"></a>

```typescript
public resetDeletionWindowInDays(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableKeyRotation` <a name="resetEnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation"></a>

```typescript
public resetEnableKeyRotation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage"></a>

```typescript
public resetKeyUsage(): void
```

##### `resetMultiRegion` <a name="resetMultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion"></a>

```typescript
public resetMultiRegion(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRotationPeriodInDays` <a name="resetRotationPeriodInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.resetRotationPeriodInDays"></a>

```typescript
public resetRotationPeriodInDays(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetXksKeyId` <a name="resetXksKeyId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetXksKeyId"></a>

```typescript
public resetXksKeyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

kmsKey.KmsKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

kmsKey.KmsKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

kmsKey.KmsKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.kmsKey.KmsKey.generateConfigForImport"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

kmsKey.KmsKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsKey.KmsKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.kmsKey.KmsKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.kmsKey.KmsKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference">KmsKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput">customerMasterKeySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput">customKeyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput">deletionWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput">enableKeyRotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput">keyUsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput">multiRegionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.rotationPeriodInDaysInput">rotationPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.xksKeyIdInput">xksKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec">customerMasterKeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId">customKeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation">enableKeyRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage">keyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion">multiRegion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.rotationPeriodInDays">rotationPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.xksKeyId">xksKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsKey.KmsKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsKey.KmsKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsKey.KmsKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsKey.KmsKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsKey.KmsKey.property.timeouts"></a>

```typescript
public readonly timeouts: KmsKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference">KmsKeyTimeoutsOutputReference</a>

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customerMasterKeySpecInput`<sup>Optional</sup> <a name="customerMasterKeySpecInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput"></a>

```typescript
public readonly customerMasterKeySpecInput: string;
```

- *Type:* string

---

##### `customKeyStoreIdInput`<sup>Optional</sup> <a name="customKeyStoreIdInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput"></a>

```typescript
public readonly customKeyStoreIdInput: string;
```

- *Type:* string

---

##### `deletionWindowInDaysInput`<sup>Optional</sup> <a name="deletionWindowInDaysInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput"></a>

```typescript
public readonly deletionWindowInDaysInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableKeyRotationInput`<sup>Optional</sup> <a name="enableKeyRotationInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput"></a>

```typescript
public readonly enableKeyRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: string;
```

- *Type:* string

---

##### `multiRegionInput`<sup>Optional</sup> <a name="multiRegionInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput"></a>

```typescript
public readonly multiRegionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `rotationPeriodInDaysInput`<sup>Optional</sup> <a name="rotationPeriodInDaysInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.rotationPeriodInDaysInput"></a>

```typescript
public readonly rotationPeriodInDaysInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KmsKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>

---

##### `xksKeyIdInput`<sup>Optional</sup> <a name="xksKeyIdInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.xksKeyIdInput"></a>

```typescript
public readonly xksKeyIdInput: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customerMasterKeySpec`<sup>Required</sup> <a name="customerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec"></a>

```typescript
public readonly customerMasterKeySpec: string;
```

- *Type:* string

---

##### `customKeyStoreId`<sup>Required</sup> <a name="customKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId"></a>

```typescript
public readonly customKeyStoreId: string;
```

- *Type:* string

---

##### `deletionWindowInDays`<sup>Required</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kmsKey.KmsKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableKeyRotation`<sup>Required</sup> <a name="enableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation"></a>

```typescript
public readonly enableKeyRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion"></a>

```typescript
public readonly multiRegion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `rotationPeriodInDays`<sup>Required</sup> <a name="rotationPeriodInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.property.rotationPeriodInDays"></a>

```typescript
public readonly rotationPeriodInDays: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `xksKeyId`<sup>Required</sup> <a name="xksKeyId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.xksKeyId"></a>

```typescript
public readonly xksKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyConfig <a name="KmsKeyConfig" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.Initializer"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

const kmsKeyConfig: kmsKey.KmsKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec">customerMasterKeySpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId">customKeyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#custom_key_store_id KmsKey#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#description KmsKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation">enableKeyRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#enable_key_rotation KmsKey#enable_key_rotation}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#id KmsKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#is_enabled KmsKey#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage">keyUsage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#key_usage KmsKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion">multiRegion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#multi_region KmsKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#policy KmsKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.rotationPeriodInDays">rotationPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#rotation_period_in_days KmsKey#rotation_period_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#tags KmsKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#tags_all KmsKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.xksKeyId">xksKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#xks_key_id KmsKey#xks_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}.

---

##### `customerMasterKeySpec`<sup>Optional</sup> <a name="customerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec"></a>

```typescript
public readonly customerMasterKeySpec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}.

---

##### `customKeyStoreId`<sup>Optional</sup> <a name="customKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId"></a>

```typescript
public readonly customKeyStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#custom_key_store_id KmsKey#custom_key_store_id}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#description KmsKey#description}.

---

##### `enableKeyRotation`<sup>Optional</sup> <a name="enableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation"></a>

```typescript
public readonly enableKeyRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#enable_key_rotation KmsKey#enable_key_rotation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#is_enabled KmsKey#is_enabled}.

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#key_usage KmsKey#key_usage}.

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion"></a>

```typescript
public readonly multiRegion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#multi_region KmsKey#multi_region}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#policy KmsKey#policy}.

---

##### `rotationPeriodInDays`<sup>Optional</sup> <a name="rotationPeriodInDays" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.rotationPeriodInDays"></a>

```typescript
public readonly rotationPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#rotation_period_in_days KmsKey#rotation_period_in_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#tags KmsKey#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#tags_all KmsKey#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#timeouts KmsKey#timeouts}

---

##### `xksKeyId`<sup>Optional</sup> <a name="xksKeyId" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.xksKeyId"></a>

```typescript
public readonly xksKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#xks_key_id KmsKey#xks_key_id}.

---

### KmsKeyTimeouts <a name="KmsKeyTimeouts" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeouts.Initializer"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

const kmsKeyTimeouts: kmsKey.KmsKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#create KmsKey#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/kms_key#create KmsKey#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyTimeoutsOutputReference <a name="KmsKeyTimeoutsOutputReference" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsKey } from '@cdktf/provider-aws'

new kmsKey.KmsKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kmsKey.KmsKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>

---



