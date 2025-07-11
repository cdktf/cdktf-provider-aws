# `vpcRouteServerPeer` Submodule <a name="`vpcRouteServerPeer` Submodule" id="@cdktf/provider-aws.vpcRouteServerPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcRouteServerPeer <a name="VpcRouteServerPeer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer aws_vpc_route_server_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

new vpcRouteServerPeer.VpcRouteServerPeer(scope: Construct, id: string, config: VpcRouteServerPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig">VpcRouteServerPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig">VpcRouteServerPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putBgpOptions">putBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetBgpOptions">resetBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpOptions` <a name="putBgpOptions" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putBgpOptions"></a>

```typescript
public putBgpOptions(value: IResolvable | VpcRouteServerPeerBgpOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putBgpOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcRouteServerPeerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>

---

##### `resetBgpOptions` <a name="resetBgpOptions" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetBgpOptions"></a>

```typescript
public resetBgpOptions(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcRouteServerPeer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isConstruct"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

vpcRouteServerPeer.VpcRouteServerPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcRouteServerPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcRouteServerPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcRouteServerPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcRouteServerPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList">VpcRouteServerPeerBgpOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniAddress">endpointEniAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniId">endpointEniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerId">routeServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerPeerId">routeServerPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference">VpcRouteServerPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptionsInput">bgpOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddressInput">peerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointIdInput">routeServerEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointId">routeServerEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bgpOptions`<sup>Required</sup> <a name="bgpOptions" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: VpcRouteServerPeerBgpOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList">VpcRouteServerPeerBgpOptionsList</a>

---

##### `endpointEniAddress`<sup>Required</sup> <a name="endpointEniAddress" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniAddress"></a>

```typescript
public readonly endpointEniAddress: string;
```

- *Type:* string

---

##### `endpointEniId`<sup>Required</sup> <a name="endpointEniId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniId"></a>

```typescript
public readonly endpointEniId: string;
```

- *Type:* string

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerId"></a>

```typescript
public readonly routeServerId: string;
```

- *Type:* string

---

##### `routeServerPeerId`<sup>Required</sup> <a name="routeServerPeerId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerPeerId"></a>

```typescript
public readonly routeServerPeerId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeouts"></a>

```typescript
public readonly timeouts: VpcRouteServerPeerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference">VpcRouteServerPeerTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `bgpOptionsInput`<sup>Optional</sup> <a name="bgpOptionsInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptionsInput"></a>

```typescript
public readonly bgpOptionsInput: IResolvable | VpcRouteServerPeerBgpOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddressInput"></a>

```typescript
public readonly peerAddressInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routeServerEndpointIdInput`<sup>Optional</sup> <a name="routeServerEndpointIdInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointIdInput"></a>

```typescript
public readonly routeServerEndpointIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcRouteServerPeerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routeServerEndpointId`<sup>Required</sup> <a name="routeServerEndpointId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointId"></a>

```typescript
public readonly routeServerEndpointId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcRouteServerPeerBgpOptions <a name="VpcRouteServerPeerBgpOptions" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

const vpcRouteServerPeerBgpOptions: vpcRouteServerPeer.VpcRouteServerPeerBgpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerAsn">peerAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#peer_asn VpcRouteServerPeer#peer_asn}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerLivenessDetection">peerLivenessDetection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#peer_liveness_detection VpcRouteServerPeer#peer_liveness_detection}. |

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#peer_asn VpcRouteServerPeer#peer_asn}.

---

##### `peerLivenessDetection`<sup>Optional</sup> <a name="peerLivenessDetection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerLivenessDetection"></a>

```typescript
public readonly peerLivenessDetection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#peer_liveness_detection VpcRouteServerPeer#peer_liveness_detection}.

---

### VpcRouteServerPeerConfig <a name="VpcRouteServerPeerConfig" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

const vpcRouteServerPeerConfig: vpcRouteServerPeer.VpcRouteServerPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.peerAddress">peerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.routeServerEndpointId">routeServerEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.bgpOptions">bgpOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]</code> | bgp_options block. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}.

---

##### `routeServerEndpointId`<sup>Required</sup> <a name="routeServerEndpointId" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.routeServerEndpointId"></a>

```typescript
public readonly routeServerEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}.

---

##### `bgpOptions`<sup>Optional</sup> <a name="bgpOptions" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: IResolvable | VpcRouteServerPeerBgpOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]

bgp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#bgp_options VpcRouteServerPeer#bgp_options}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#region VpcRouteServerPeer#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcRouteServerPeerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#timeouts VpcRouteServerPeer#timeouts}

---

### VpcRouteServerPeerTimeouts <a name="VpcRouteServerPeerTimeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

const vpcRouteServerPeerTimeouts: vpcRouteServerPeer.VpcRouteServerPeerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#create VpcRouteServerPeer#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_route_server_peer#delete VpcRouteServerPeer#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcRouteServerPeerBgpOptionsList <a name="VpcRouteServerPeerBgpOptionsList" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

new vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.get"></a>

```typescript
public get(index: number): VpcRouteServerPeerBgpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcRouteServerPeerBgpOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>[]

---


### VpcRouteServerPeerBgpOptionsOutputReference <a name="VpcRouteServerPeerBgpOptionsOutputReference" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

new vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection">resetPeerLivenessDetection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeerLivenessDetection` <a name="resetPeerLivenessDetection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection"></a>

```typescript
public resetPeerLivenessDetection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput">peerLivenessDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection">peerLivenessDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peerLivenessDetectionInput`<sup>Optional</sup> <a name="peerLivenessDetectionInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput"></a>

```typescript
public readonly peerLivenessDetectionInput: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peerLivenessDetection`<sup>Required</sup> <a name="peerLivenessDetection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection"></a>

```typescript
public readonly peerLivenessDetection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcRouteServerPeerBgpOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>

---


### VpcRouteServerPeerTimeoutsOutputReference <a name="VpcRouteServerPeerTimeoutsOutputReference" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcRouteServerPeer } from '@cdktf/provider-aws'

new vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcRouteServerPeerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>

---



