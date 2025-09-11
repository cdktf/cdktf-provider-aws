# `vpcRouteServerVpcAssociation` Submodule <a name="`vpcRouteServerVpcAssociation` Submodule" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcRouteServerVpcAssociation <a name="VpcRouteServerVpcAssociation" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association aws_vpc_route_server_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

new vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation(scope: Construct, id: string, config: VpcRouteServerVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig">VpcRouteServerVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig">VpcRouteServerVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcRouteServerVpcAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcRouteServerVpcAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcRouteServerVpcAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcRouteServerVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcRouteServerVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcRouteServerVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference">VpcRouteServerVpcAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerIdInput">routeServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerId">routeServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: VpcRouteServerVpcAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference">VpcRouteServerVpcAssociationTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routeServerIdInput`<sup>Optional</sup> <a name="routeServerIdInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerIdInput"></a>

```typescript
public readonly routeServerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcRouteServerVpcAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.routeServerId"></a>

```typescript
public readonly routeServerId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcRouteServerVpcAssociationConfig <a name="VpcRouteServerVpcAssociationConfig" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.Initializer"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

const vpcRouteServerVpcAssociationConfig: vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.routeServerId">routeServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.routeServerId"></a>

```typescript
public readonly routeServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#region VpcRouteServerVpcAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcRouteServerVpcAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#timeouts VpcRouteServerVpcAssociation#timeouts}

---

### VpcRouteServerVpcAssociationTimeouts <a name="VpcRouteServerVpcAssociationTimeouts" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.Initializer"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

const vpcRouteServerVpcAssociationTimeouts: vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#create VpcRouteServerVpcAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_route_server_vpc_association#delete VpcRouteServerVpcAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcRouteServerVpcAssociationTimeoutsOutputReference <a name="VpcRouteServerVpcAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcRouteServerVpcAssociation } from '@cdktf/provider-aws'

new vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcRouteServerVpcAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerVpcAssociation.VpcRouteServerVpcAssociationTimeouts">VpcRouteServerVpcAssociationTimeouts</a>

---



