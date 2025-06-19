# `route53HostedZoneDnssec` Submodule <a name="`route53HostedZoneDnssec` Submodule" id="@cdktf/provider-aws.route53HostedZoneDnssec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZoneDnssec <a name="Route53HostedZoneDnssec" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

new route53HostedZoneDnssec.Route53HostedZoneDnssec(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig">Route53HostedZoneDnssecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig">Route53HostedZoneDnssecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetSigningStatus">resetSigningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53HostedZoneDnssecTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSigningStatus` <a name="resetSigningStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetSigningStatus"></a>

```typescript
public resetSigningStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53HostedZoneDnssec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53HostedZoneDnssec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53HostedZoneDnssec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference">Route53HostedZoneDnssecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatusInput">signingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatus">signingStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeouts"></a>

```typescript
public readonly timeouts: Route53HostedZoneDnssecTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference">Route53HostedZoneDnssecTimeoutsOutputReference</a>

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `signingStatusInput`<sup>Optional</sup> <a name="signingStatusInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatusInput"></a>

```typescript
public readonly signingStatusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Route53HostedZoneDnssecTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `signingStatus`<sup>Required</sup> <a name="signingStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatus"></a>

```typescript
public readonly signingStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneDnssecConfig <a name="Route53HostedZoneDnssecConfig" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.Initializer"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

const route53HostedZoneDnssecConfig: route53HostedZoneDnssec.Route53HostedZoneDnssecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.signingStatus">signingStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `signingStatus`<sup>Optional</sup> <a name="signingStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.signingStatus"></a>

```typescript
public readonly signingStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53HostedZoneDnssecTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#timeouts Route53HostedZoneDnssec#timeouts}

---

### Route53HostedZoneDnssecTimeouts <a name="Route53HostedZoneDnssecTimeouts" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.Initializer"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

const route53HostedZoneDnssecTimeouts: route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#create Route53HostedZoneDnssec#create}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#delete Route53HostedZoneDnssec#delete}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#update Route53HostedZoneDnssec#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#create Route53HostedZoneDnssec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#delete Route53HostedZoneDnssec#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_hosted_zone_dnssec#update Route53HostedZoneDnssec#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HostedZoneDnssecTimeoutsOutputReference <a name="Route53HostedZoneDnssecTimeoutsOutputReference" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53HostedZoneDnssec } from '@cdktf/provider-aws'

new route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneDnssecTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecTimeouts">Route53HostedZoneDnssecTimeouts</a>

---



