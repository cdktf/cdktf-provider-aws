# `vpclatticeServiceNetworkVpcAssociation` Submodule <a name="`vpclatticeServiceNetworkVpcAssociation` Submodule" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkVpcAssociation <a name="VpclatticeServiceNetworkVpcAssociation" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association aws_vpclattice_service_network_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

new vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation(scope: Construct, id: string, config: VpclatticeServiceNetworkVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig">VpclatticeServiceNetworkVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig">VpclatticeServiceNetworkVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: VpclatticeServiceNetworkVpcAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference">VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifierInput">serviceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference">VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceNetworkIdentifierInput`<sup>Optional</sup> <a name="serviceNetworkIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifierInput"></a>

```typescript
public readonly serviceNetworkIdentifierInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpclatticeServiceNetworkVpcAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifierInput"></a>

```typescript
public readonly vpcIdentifierInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkVpcAssociationConfig <a name="VpclatticeServiceNetworkVpcAssociationConfig" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

const vpclatticeServiceNetworkVpcAssociationConfig: vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}.

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpclatticeServiceNetworkVpcAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#timeouts VpclatticeServiceNetworkVpcAssociation#timeouts}

---

### VpclatticeServiceNetworkVpcAssociationTimeouts <a name="VpclatticeServiceNetworkVpcAssociationTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

const vpclatticeServiceNetworkVpcAssociationTimeouts: vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#create VpclatticeServiceNetworkVpcAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#delete VpclatticeServiceNetworkVpcAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#update VpclatticeServiceNetworkVpcAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#create VpclatticeServiceNetworkVpcAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#delete VpclatticeServiceNetworkVpcAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/vpclattice_service_network_vpc_association#update VpclatticeServiceNetworkVpcAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktf/provider-aws'

new vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkVpcAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>

---



