# `ec2TransitGatewayDefaultRouteTablePropagation` Submodule <a name="`ec2TransitGatewayDefaultRouteTablePropagation` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayDefaultRouteTablePropagation <a name="Ec2TransitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation aws_ec2_transit_gateway_default_route_table_propagation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

new ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation(scope: Construct, id: string, config: Ec2TransitGatewayDefaultRouteTablePropagationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig">Ec2TransitGatewayDefaultRouteTablePropagationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig">Ec2TransitGatewayDefaultRouteTablePropagationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTablePropagation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTablePropagation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayDefaultRouteTablePropagation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayDefaultRouteTablePropagation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayDefaultRouteTablePropagation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.originalDefaultRouteTableId">originalDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `originalDefaultRouteTableId`<sup>Required</sup> <a name="originalDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.originalDefaultRouteTableId"></a>

```typescript
public readonly originalDefaultRouteTableId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Ec2TransitGatewayDefaultRouteTablePropagationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableIdInput"></a>

```typescript
public readonly transitGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayDefaultRouteTablePropagationConfig <a name="Ec2TransitGatewayDefaultRouteTablePropagationConfig" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

const ec2TransitGatewayDefaultRouteTablePropagationConfig: ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#timeouts Ec2TransitGatewayDefaultRouteTablePropagation#timeouts}

---

### Ec2TransitGatewayDefaultRouteTablePropagationTimeouts <a name="Ec2TransitGatewayDefaultRouteTablePropagationTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

const ec2TransitGatewayDefaultRouteTablePropagationTimeouts: ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#create Ec2TransitGatewayDefaultRouteTablePropagation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#delete Ec2TransitGatewayDefaultRouteTablePropagation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#update Ec2TransitGatewayDefaultRouteTablePropagation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference <a name="Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayDefaultRouteTablePropagation } from '@cdktf/provider-aws'

new ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayDefaultRouteTablePropagationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

---



