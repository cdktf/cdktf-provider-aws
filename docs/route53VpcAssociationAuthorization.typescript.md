# `route53VpcAssociationAuthorization` Submodule <a name="`route53VpcAssociationAuthorization` Submodule" id="@cdktf/provider-aws.route53VpcAssociationAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53VpcAssociationAuthorization <a name="Route53VpcAssociationAuthorization" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization aws_route53_vpc_association_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

new route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization(scope: Construct, id: string, config: Route53VpcAssociationAuthorizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig">Route53VpcAssociationAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig">Route53VpcAssociationAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetVpcRegion">resetVpcRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53VpcAssociationAuthorizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcRegion` <a name="resetVpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetVpcRegion"></a>

```typescript
public resetVpcRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53VpcAssociationAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53VpcAssociationAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53VpcAssociationAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53VpcAssociationAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53VpcAssociationAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference">Route53VpcAssociationAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegionInput">vpcRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegion">vpcRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeouts"></a>

```typescript
public readonly timeouts: Route53VpcAssociationAuthorizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference">Route53VpcAssociationAuthorizationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Route53VpcAssociationAuthorizationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcRegionInput`<sup>Optional</sup> <a name="vpcRegionInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegionInput"></a>

```typescript
public readonly vpcRegionInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcRegion`<sup>Required</sup> <a name="vpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegion"></a>

```typescript
public readonly vpcRegion: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53VpcAssociationAuthorizationConfig <a name="Route53VpcAssociationAuthorizationConfig" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.Initializer"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

const route53VpcAssociationAuthorizationConfig: route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcRegion">vpcRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53VpcAssociationAuthorizationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#timeouts Route53VpcAssociationAuthorization#timeouts}

---

##### `vpcRegion`<sup>Optional</sup> <a name="vpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcRegion"></a>

```typescript
public readonly vpcRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}.

---

### Route53VpcAssociationAuthorizationTimeouts <a name="Route53VpcAssociationAuthorizationTimeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.Initializer"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

const route53VpcAssociationAuthorizationTimeouts: route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#create Route53VpcAssociationAuthorization#create}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#delete Route53VpcAssociationAuthorization#delete}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#read Route53VpcAssociationAuthorization#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#create Route53VpcAssociationAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#delete Route53VpcAssociationAuthorization#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_vpc_association_authorization#read Route53VpcAssociationAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53VpcAssociationAuthorizationTimeoutsOutputReference <a name="Route53VpcAssociationAuthorizationTimeoutsOutputReference" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53VpcAssociationAuthorization } from '@cdktf/provider-aws'

new route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53VpcAssociationAuthorizationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>

---



