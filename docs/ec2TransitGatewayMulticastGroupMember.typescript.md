# `ec2TransitGatewayMulticastGroupMember` Submodule <a name="`ec2TransitGatewayMulticastGroupMember` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastGroupMember <a name="Ec2TransitGatewayMulticastGroupMember" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member aws_ec2_transit_gateway_multicast_group_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer"></a>

```typescript
import { ec2TransitGatewayMulticastGroupMember } from '@cdktf/provider-aws'

new ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig">Ec2TransitGatewayMulticastGroupMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig">Ec2TransitGatewayMulticastGroupMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayMulticastGroupMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct"></a>

```typescript
import { ec2TransitGatewayMulticastGroupMember } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayMulticastGroupMember } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayMulticastGroupMember } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayMulticastGroupMember } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2TransitGatewayMulticastGroupMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayMulticastGroupMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayMulticastGroupMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastGroupMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddressInput">groupIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainIdInput">transitGatewayMulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddress">groupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIpAddressInput`<sup>Optional</sup> <a name="groupIpAddressInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddressInput"></a>

```typescript
public readonly groupIpAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `transitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="transitGatewayMulticastDomainIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainIdInput"></a>

```typescript
public readonly transitGatewayMulticastDomainIdInput: string;
```

- *Type:* string

---

##### `groupIpAddress`<sup>Required</sup> <a name="groupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddress"></a>

```typescript
public readonly groupIpAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainId"></a>

```typescript
public readonly transitGatewayMulticastDomainId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastGroupMemberConfig <a name="Ec2TransitGatewayMulticastGroupMemberConfig" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayMulticastGroupMember } from '@cdktf/provider-aws'

const ec2TransitGatewayMulticastGroupMemberConfig: ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.groupIpAddress">groupIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#id Ec2TransitGatewayMulticastGroupMember#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIpAddress`<sup>Required</sup> <a name="groupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.groupIpAddress"></a>

```typescript
public readonly groupIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}.

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.transitGatewayMulticastDomainId"></a>

```typescript
public readonly transitGatewayMulticastDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#id Ec2TransitGatewayMulticastGroupMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ec2_transit_gateway_multicast_group_member#region Ec2TransitGatewayMulticastGroupMember#region}

---



