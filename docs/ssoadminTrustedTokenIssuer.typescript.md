# `ssoadminTrustedTokenIssuer` Submodule <a name="`ssoadminTrustedTokenIssuer` Submodule" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminTrustedTokenIssuer <a name="SsoadminTrustedTokenIssuer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

new ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer(scope: Construct, id: string, config: SsoadminTrustedTokenIssuerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig">SsoadminTrustedTokenIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig">SsoadminTrustedTokenIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration">putTrustedTokenIssuerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTrustedTokenIssuerConfiguration">resetTrustedTokenIssuerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTrustedTokenIssuerConfiguration` <a name="putTrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration"></a>

```typescript
public putTrustedTokenIssuerConfiguration(value: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrustedTokenIssuerConfiguration` <a name="resetTrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTrustedTokenIssuerConfiguration"></a>

```typescript
public resetTrustedTokenIssuerConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminTrustedTokenIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminTrustedTokenIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminTrustedTokenIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfiguration">trustedTokenIssuerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfigurationInput">trustedTokenIssuerConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerTypeInput">trustedTokenIssuerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerType">trustedTokenIssuerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `trustedTokenIssuerConfiguration`<sup>Required</sup> <a name="trustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfiguration"></a>

```typescript
public readonly trustedTokenIssuerConfiguration: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trustedTokenIssuerConfigurationInput`<sup>Optional</sup> <a name="trustedTokenIssuerConfigurationInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfigurationInput"></a>

```typescript
public readonly trustedTokenIssuerConfigurationInput: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

---

##### `trustedTokenIssuerTypeInput`<sup>Optional</sup> <a name="trustedTokenIssuerTypeInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerTypeInput"></a>

```typescript
public readonly trustedTokenIssuerTypeInput: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trustedTokenIssuerType`<sup>Required</sup> <a name="trustedTokenIssuerType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerType"></a>

```typescript
public readonly trustedTokenIssuerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminTrustedTokenIssuerConfig <a name="SsoadminTrustedTokenIssuerConfig" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

const ssoadminTrustedTokenIssuerConfig: ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerType">trustedTokenIssuerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerConfiguration">trustedTokenIssuerConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]</code> | trusted_token_issuer_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}.

---

##### `trustedTokenIssuerType`<sup>Required</sup> <a name="trustedTokenIssuerType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerType"></a>

```typescript
public readonly trustedTokenIssuerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}.

---

##### `trustedTokenIssuerConfiguration`<sup>Optional</sup> <a name="trustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerConfiguration"></a>

```typescript
public readonly trustedTokenIssuerConfiguration: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

trusted_token_issuer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_configuration SsoadminTrustedTokenIssuer#trusted_token_issuer_configuration}

---

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

const ssoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration: ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.property.oidcJwtConfiguration">oidcJwtConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]</code> | oidc_jwt_configuration block. |

---

##### `oidcJwtConfiguration`<sup>Optional</sup> <a name="oidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.property.oidcJwtConfiguration"></a>

```typescript
public readonly oidcJwtConfiguration: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

oidc_jwt_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#oidc_jwt_configuration SsoadminTrustedTokenIssuer#oidc_jwt_configuration}

---

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

const ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration: ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.claimAttributePath">claimAttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.identityStoreAttributePath">identityStoreAttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.jwksRetrievalOption">jwksRetrievalOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}. |

---

##### `claimAttributePath`<sup>Required</sup> <a name="claimAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.claimAttributePath"></a>

```typescript
public readonly claimAttributePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}.

---

##### `identityStoreAttributePath`<sup>Required</sup> <a name="identityStoreAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.identityStoreAttributePath"></a>

```typescript
public readonly identityStoreAttributePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}.

---

##### `jwksRetrievalOption`<sup>Required</sup> <a name="jwksRetrievalOption" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.jwksRetrievalOption"></a>

```typescript
public readonly jwksRetrievalOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

new ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get"></a>

```typescript
public get(index: number): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

new ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get"></a>

```typescript
public get(index: number): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

new ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePathInput">claimAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePathInput">identityStoreAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOptionInput">jwksRetrievalOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePath">claimAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePath">identityStoreAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOption">jwksRetrievalOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimAttributePathInput`<sup>Optional</sup> <a name="claimAttributePathInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePathInput"></a>

```typescript
public readonly claimAttributePathInput: string;
```

- *Type:* string

---

##### `identityStoreAttributePathInput`<sup>Optional</sup> <a name="identityStoreAttributePathInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePathInput"></a>

```typescript
public readonly identityStoreAttributePathInput: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `jwksRetrievalOptionInput`<sup>Optional</sup> <a name="jwksRetrievalOptionInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOptionInput"></a>

```typescript
public readonly jwksRetrievalOptionInput: string;
```

- *Type:* string

---

##### `claimAttributePath`<sup>Required</sup> <a name="claimAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePath"></a>

```typescript
public readonly claimAttributePath: string;
```

- *Type:* string

---

##### `identityStoreAttributePath`<sup>Required</sup> <a name="identityStoreAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePath"></a>

```typescript
public readonly identityStoreAttributePath: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `jwksRetrievalOption`<sup>Required</sup> <a name="jwksRetrievalOption" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOption"></a>

```typescript
public readonly jwksRetrievalOption: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer"></a>

```typescript
import { ssoadminTrustedTokenIssuer } from '@cdktf/provider-aws'

new ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration">putOidcJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resetOidcJwtConfiguration">resetOidcJwtConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOidcJwtConfiguration` <a name="putOidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration"></a>

```typescript
public putOidcJwtConfiguration(value: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

---

##### `resetOidcJwtConfiguration` <a name="resetOidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resetOidcJwtConfiguration"></a>

```typescript
public resetOidcJwtConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfiguration">oidcJwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfigurationInput">oidcJwtConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oidcJwtConfiguration`<sup>Required</sup> <a name="oidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfiguration"></a>

```typescript
public readonly oidcJwtConfiguration: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList</a>

---

##### `oidcJwtConfigurationInput`<sup>Optional</sup> <a name="oidcJwtConfigurationInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfigurationInput"></a>

```typescript
public readonly oidcJwtConfigurationInput: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>

---



