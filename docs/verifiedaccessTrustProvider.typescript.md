# `verifiedaccessTrustProvider` Submodule <a name="`verifiedaccessTrustProvider` Submodule" id="@cdktf/provider-aws.verifiedaccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessTrustProvider <a name="VerifiedaccessTrustProvider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider aws_verifiedaccess_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

new verifiedaccessTrustProvider.VerifiedaccessTrustProvider(scope: Construct, id: string, config: VerifiedaccessTrustProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig">VerifiedaccessTrustProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig">VerifiedaccessTrustProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions">putDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions">putOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions">resetDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType">resetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions">resetOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType">resetUserTrustProviderType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeviceOptions` <a name="putDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions"></a>

```typescript
public putDeviceOptions(value: VerifiedaccessTrustProviderDeviceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `putOidcOptions` <a name="putOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions"></a>

```typescript
public putOidcOptions(value: VerifiedaccessTrustProviderOidcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: VerifiedaccessTrustProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceOptions` <a name="resetDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions"></a>

```typescript
public resetDeviceOptions(): void
```

##### `resetDeviceTrustProviderType` <a name="resetDeviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType"></a>

```typescript
public resetDeviceTrustProviderType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOidcOptions` <a name="resetOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions"></a>

```typescript
public resetOidcOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserTrustProviderType` <a name="resetUserTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType"></a>

```typescript
public resetUserTrustProviderType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedaccessTrustProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedaccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput">deviceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput">deviceTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput">oidcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput">policyReferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput">trustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput">userTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deviceOptions`<sup>Required</sup> <a name="deviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions"></a>

```typescript
public readonly deviceOptions: VerifiedaccessTrustProviderDeviceOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `oidcOptions`<sup>Required</sup> <a name="oidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions"></a>

```typescript
public readonly oidcOptions: VerifiedaccessTrustProviderOidcOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts"></a>

```typescript
public readonly timeouts: VerifiedaccessTrustProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceOptionsInput`<sup>Optional</sup> <a name="deviceOptionsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput"></a>

```typescript
public readonly deviceOptionsInput: VerifiedaccessTrustProviderDeviceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `deviceTrustProviderTypeInput`<sup>Optional</sup> <a name="deviceTrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```typescript
public readonly deviceTrustProviderTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `oidcOptionsInput`<sup>Optional</sup> <a name="oidcOptionsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput"></a>

```typescript
public readonly oidcOptionsInput: VerifiedaccessTrustProviderOidcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `policyReferenceNameInput`<sup>Optional</sup> <a name="policyReferenceNameInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput"></a>

```typescript
public readonly policyReferenceNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VerifiedaccessTrustProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---

##### `trustProviderTypeInput`<sup>Optional</sup> <a name="trustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput"></a>

```typescript
public readonly trustProviderTypeInput: string;
```

- *Type:* string

---

##### `userTrustProviderTypeInput`<sup>Optional</sup> <a name="userTrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput"></a>

```typescript
public readonly userTrustProviderTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceTrustProviderType`<sup>Required</sup> <a name="deviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

---

##### `userTrustProviderType`<sup>Required</sup> <a name="userTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessTrustProviderConfig <a name="VerifiedaccessTrustProviderConfig" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

const verifiedaccessTrustProviderConfig: verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | device_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | oidc_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}.

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}.

---

##### `deviceOptions`<sup>Optional</sup> <a name="deviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions"></a>

```typescript
public readonly deviceOptions: VerifiedaccessTrustProviderDeviceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

device_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidcOptions`<sup>Optional</sup> <a name="oidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions"></a>

```typescript
public readonly oidcOptions: VerifiedaccessTrustProviderOidcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

oidc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VerifiedaccessTrustProviderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}.

---

### VerifiedaccessTrustProviderDeviceOptions <a name="VerifiedaccessTrustProviderDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

const verifiedaccessTrustProviderDeviceOptions: verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}. |

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}.

---

### VerifiedaccessTrustProviderOidcOptions <a name="VerifiedaccessTrustProviderOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

const verifiedaccessTrustProviderOidcOptions: verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}. |

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}.

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}.

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}.

---

### VerifiedaccessTrustProviderTimeouts <a name="VerifiedaccessTrustProviderTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

const verifiedaccessTrustProviderTimeouts: verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessTrustProviderDeviceOptionsOutputReference <a name="VerifiedaccessTrustProviderDeviceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

new verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VerifiedaccessTrustProviderDeviceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---


### VerifiedaccessTrustProviderOidcOptionsOutputReference <a name="VerifiedaccessTrustProviderOidcOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

new verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```typescript
public resetUserInfoEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VerifiedaccessTrustProviderOidcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---


### VerifiedaccessTrustProviderTimeoutsOutputReference <a name="VerifiedaccessTrustProviderTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { verifiedaccessTrustProvider } from '@cdktf/provider-aws'

new verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedaccessTrustProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---



