# `ec2TransitGatewayDefaultRouteTableAssociation` Submodule <a name="`ec2TransitGatewayDefaultRouteTableAssociation` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayDefaultRouteTableAssociation <a name="Ec2TransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association aws_ec2_transit_gateway_default_route_table_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

new ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation(scope: Construct, id: string, config: Ec2TransitGatewayDefaultRouteTableAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig">Ec2TransitGatewayDefaultRouteTableAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig">Ec2TransitGatewayDefaultRouteTableAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2TransitGatewayDefaultRouteTableAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTableAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTableAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayDefaultRouteTableAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayDefaultRouteTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayDefaultRouteTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.originalDefaultRouteTableId">originalDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `originalDefaultRouteTableId`<sup>Required</sup> <a name="originalDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.originalDefaultRouteTableId"></a>

```typescript
public readonly originalDefaultRouteTableId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Ec2TransitGatewayDefaultRouteTableAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableIdInput"></a>

```typescript
public readonly transitGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayDefaultRouteTableAssociationConfig <a name="Ec2TransitGatewayDefaultRouteTableAssociationConfig" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

const ec2TransitGatewayDefaultRouteTableAssociationConfig: ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTableAssociation#transit_gateway_route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayDefaultRouteTableAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#timeouts Ec2TransitGatewayDefaultRouteTableAssociation#timeouts}

---

### Ec2TransitGatewayDefaultRouteTableAssociationTimeouts <a name="Ec2TransitGatewayDefaultRouteTableAssociationTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

const ec2TransitGatewayDefaultRouteTableAssociationTimeouts: ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#create Ec2TransitGatewayDefaultRouteTableAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#delete Ec2TransitGatewayDefaultRouteTableAssociation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ec2_transit_gateway_default_route_table_association#update Ec2TransitGatewayDefaultRouteTableAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference <a name="Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTableAssociation } from '@cdktf/provider-aws'

new ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayDefaultRouteTableAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTableAssociation.Ec2TransitGatewayDefaultRouteTableAssociationTimeouts">Ec2TransitGatewayDefaultRouteTableAssociationTimeouts</a>

---



