# `paymentcryptographyKeyAlias` Submodule <a name="`paymentcryptographyKeyAlias` Submodule" id="@cdktf/provider-aws.paymentcryptographyKeyAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKeyAlias <a name="PaymentcryptographyKeyAlias" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key_alias aws_paymentcryptography_key_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer"></a>

```typescript
import { paymentcryptographyKeyAlias } from '@cdktf/provider-aws'

new paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias(scope: Construct, id: string, config: PaymentcryptographyKeyAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig">PaymentcryptographyKeyAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig">PaymentcryptographyKeyAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetKeyArn">resetKeyArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetKeyArn"></a>

```typescript
public resetKeyArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct"></a>

```typescript
import { paymentcryptographyKeyAlias } from '@cdktf/provider-aws'

paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement"></a>

```typescript
import { paymentcryptographyKeyAlias } from '@cdktf/provider-aws'

paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource"></a>

```typescript
import { paymentcryptographyKeyAlias } from '@cdktf/provider-aws'

paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport"></a>

```typescript
import { paymentcryptographyKeyAlias } from '@cdktf/provider-aws'

paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaymentcryptographyKeyAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaymentcryptographyKeyAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKeyAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasNameInput">aliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasNameInput"></a>

```typescript
public readonly aliasNameInput: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyAliasConfig <a name="PaymentcryptographyKeyAliasConfig" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.Initializer"></a>

```typescript
import { paymentcryptographyKeyAlias } from '@cdktf/provider-aws'

const paymentcryptographyKeyAliasConfig: paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.aliasName">aliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}.

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}.

---



