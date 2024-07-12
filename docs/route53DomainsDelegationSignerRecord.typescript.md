# `route53DomainsDelegationSignerRecord` Submodule <a name="`route53DomainsDelegationSignerRecord` Submodule" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDelegationSignerRecord <a name="Route53DomainsDelegationSignerRecord" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

new route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord(scope: Construct, id: string, config: Route53DomainsDelegationSignerRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig">Route53DomainsDelegationSignerRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig">Route53DomainsDelegationSignerRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes">putSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetSigningAttributes">resetSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSigningAttributes` <a name="putSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes"></a>

```typescript
public putSigningAttributes(value: IResolvable | Route53DomainsDelegationSignerRecordSigningAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53DomainsDelegationSignerRecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---

##### `resetSigningAttributes` <a name="resetSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetSigningAttributes"></a>

```typescript
public resetSigningAttributes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53DomainsDelegationSignerRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53DomainsDelegationSignerRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDelegationSignerRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dnssecKeyId">dnssecKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributes">signingAttributes</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList">Route53DomainsDelegationSignerRecordSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference">Route53DomainsDelegationSignerRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributesInput">signingAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnssecKeyId`<sup>Required</sup> <a name="dnssecKeyId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dnssecKeyId"></a>

```typescript
public readonly dnssecKeyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `signingAttributes`<sup>Required</sup> <a name="signingAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributes"></a>

```typescript
public readonly signingAttributes: Route53DomainsDelegationSignerRecordSigningAttributesList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList">Route53DomainsDelegationSignerRecordSigningAttributesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeouts"></a>

```typescript
public readonly timeouts: Route53DomainsDelegationSignerRecordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference">Route53DomainsDelegationSignerRecordTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `signingAttributesInput`<sup>Optional</sup> <a name="signingAttributesInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributesInput"></a>

```typescript
public readonly signingAttributesInput: IResolvable | Route53DomainsDelegationSignerRecordSigningAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Route53DomainsDelegationSignerRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDelegationSignerRecordConfig <a name="Route53DomainsDelegationSignerRecordConfig" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

const route53DomainsDelegationSignerRecordConfig: route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.signingAttributes">signingAttributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]</code> | signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}.

---

##### `signingAttributes`<sup>Optional</sup> <a name="signingAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.signingAttributes"></a>

```typescript
public readonly signingAttributes: IResolvable | Route53DomainsDelegationSignerRecordSigningAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]

signing_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#signing_attributes Route53DomainsDelegationSignerRecord#signing_attributes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53DomainsDelegationSignerRecordTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#timeouts Route53DomainsDelegationSignerRecord#timeouts}

---

### Route53DomainsDelegationSignerRecordSigningAttributes <a name="Route53DomainsDelegationSignerRecordSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

const route53DomainsDelegationSignerRecordSigningAttributes: route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.algorithm">algorithm</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.flags">flags</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.publicKey">publicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.algorithm"></a>

```typescript
public readonly algorithm: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}.

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.flags"></a>

```typescript
public readonly flags: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}.

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}.

---

### Route53DomainsDelegationSignerRecordTimeouts <a name="Route53DomainsDelegationSignerRecordTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

const route53DomainsDelegationSignerRecordTimeouts: route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#create Route53DomainsDelegationSignerRecord#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/route53domains_delegation_signer_record#delete Route53DomainsDelegationSignerRecord#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDelegationSignerRecordSigningAttributesList <a name="Route53DomainsDelegationSignerRecordSigningAttributesList" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

new route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get"></a>

```typescript
public get(index: number): Route53DomainsDelegationSignerRecordSigningAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDelegationSignerRecordSigningAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>[]

---


### Route53DomainsDelegationSignerRecordSigningAttributesOutputReference <a name="Route53DomainsDelegationSignerRecordSigningAttributesOutputReference" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

new route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flagsInput">flagsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithm">algorithm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flags">flags</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: number;
```

- *Type:* number

---

##### `flagsInput`<sup>Optional</sup> <a name="flagsInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flagsInput"></a>

```typescript
public readonly flagsInput: number;
```

- *Type:* number

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: number;
```

- *Type:* number

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flags"></a>

```typescript
public readonly flags: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDelegationSignerRecordSigningAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes">Route53DomainsDelegationSignerRecordSigningAttributes</a>

---


### Route53DomainsDelegationSignerRecordTimeoutsOutputReference <a name="Route53DomainsDelegationSignerRecordTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53DomainsDelegationSignerRecord } from '@cdktf/provider-aws'

new route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDelegationSignerRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---



