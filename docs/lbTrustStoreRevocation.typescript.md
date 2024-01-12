# `lbTrustStoreRevocation` Submodule <a name="`lbTrustStoreRevocation` Submodule" id="@cdktf/provider-aws.lbTrustStoreRevocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTrustStoreRevocation <a name="LbTrustStoreRevocation" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

new lbTrustStoreRevocation.LbTrustStoreRevocation(scope: Construct, id: string, config: LbTrustStoreRevocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig">LbTrustStoreRevocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig">LbTrustStoreRevocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetRevocationsS3ObjectVersion">resetRevocationsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts"></a>

```typescript
public putTimeouts(value: LbTrustStoreRevocationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRevocationsS3ObjectVersion` <a name="resetRevocationsS3ObjectVersion" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetRevocationsS3ObjectVersion"></a>

```typescript
public resetRevocationsS3ObjectVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbTrustStoreRevocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbTrustStoreRevocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbTrustStoreRevocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationId">revocationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference">LbTrustStoreRevocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3BucketInput">revocationsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3KeyInput">revocationsS3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersionInput">revocationsS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArnInput">trustStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Bucket">revocationsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Key">revocationsS3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersion">revocationsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArn">trustStoreArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `revocationId`<sup>Required</sup> <a name="revocationId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationId"></a>

```typescript
public readonly revocationId: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeouts"></a>

```typescript
public readonly timeouts: LbTrustStoreRevocationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference">LbTrustStoreRevocationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `revocationsS3BucketInput`<sup>Optional</sup> <a name="revocationsS3BucketInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3BucketInput"></a>

```typescript
public readonly revocationsS3BucketInput: string;
```

- *Type:* string

---

##### `revocationsS3KeyInput`<sup>Optional</sup> <a name="revocationsS3KeyInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3KeyInput"></a>

```typescript
public readonly revocationsS3KeyInput: string;
```

- *Type:* string

---

##### `revocationsS3ObjectVersionInput`<sup>Optional</sup> <a name="revocationsS3ObjectVersionInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersionInput"></a>

```typescript
public readonly revocationsS3ObjectVersionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LbTrustStoreRevocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

---

##### `trustStoreArnInput`<sup>Optional</sup> <a name="trustStoreArnInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArnInput"></a>

```typescript
public readonly trustStoreArnInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revocationsS3Bucket`<sup>Required</sup> <a name="revocationsS3Bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Bucket"></a>

```typescript
public readonly revocationsS3Bucket: string;
```

- *Type:* string

---

##### `revocationsS3Key`<sup>Required</sup> <a name="revocationsS3Key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Key"></a>

```typescript
public readonly revocationsS3Key: string;
```

- *Type:* string

---

##### `revocationsS3ObjectVersion`<sup>Required</sup> <a name="revocationsS3ObjectVersion" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersion"></a>

```typescript
public readonly revocationsS3ObjectVersion: string;
```

- *Type:* string

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArn"></a>

```typescript
public readonly trustStoreArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbTrustStoreRevocationConfig <a name="LbTrustStoreRevocationConfig" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.Initializer"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

const lbTrustStoreRevocationConfig: lbTrustStoreRevocation.LbTrustStoreRevocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Bucket">revocationsS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Key">revocationsS3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.trustStoreArn">trustStoreArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3ObjectVersion">revocationsS3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `revocationsS3Bucket`<sup>Required</sup> <a name="revocationsS3Bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Bucket"></a>

```typescript
public readonly revocationsS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}.

---

##### `revocationsS3Key`<sup>Required</sup> <a name="revocationsS3Key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Key"></a>

```typescript
public readonly revocationsS3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}.

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.trustStoreArn"></a>

```typescript
public readonly trustStoreArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revocationsS3ObjectVersion`<sup>Optional</sup> <a name="revocationsS3ObjectVersion" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3ObjectVersion"></a>

```typescript
public readonly revocationsS3ObjectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LbTrustStoreRevocationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#timeouts LbTrustStoreRevocation#timeouts}

---

### LbTrustStoreRevocationTimeouts <a name="LbTrustStoreRevocationTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.Initializer"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

const lbTrustStoreRevocationTimeouts: lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTrustStoreRevocationTimeoutsOutputReference <a name="LbTrustStoreRevocationTimeoutsOutputReference" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer"></a>

```typescript
import { lbTrustStoreRevocation } from '@cdktf/provider-aws'

new lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbTrustStoreRevocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

---



