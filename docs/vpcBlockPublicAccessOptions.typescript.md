# `vpcBlockPublicAccessOptions` Submodule <a name="`vpcBlockPublicAccessOptions` Submodule" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBlockPublicAccessOptions <a name="VpcBlockPublicAccessOptions" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options aws_vpc_block_public_access_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

new vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions(scope: Construct, id: string, config: VpcBlockPublicAccessOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig">VpcBlockPublicAccessOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig">VpcBlockPublicAccessOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcBlockPublicAccessOptionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcBlockPublicAccessOptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isConstruct"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformElement"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformResource"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcBlockPublicAccessOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcBlockPublicAccessOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcBlockPublicAccessOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcBlockPublicAccessOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference">VpcBlockPublicAccessOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.internetGatewayBlockModeInput">internetGatewayBlockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.internetGatewayBlockMode">internetGatewayBlockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.timeouts"></a>

```typescript
public readonly timeouts: VpcBlockPublicAccessOptionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference">VpcBlockPublicAccessOptionsTimeoutsOutputReference</a>

---

##### `internetGatewayBlockModeInput`<sup>Optional</sup> <a name="internetGatewayBlockModeInput" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.internetGatewayBlockModeInput"></a>

```typescript
public readonly internetGatewayBlockModeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcBlockPublicAccessOptionsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a>

---

##### `internetGatewayBlockMode`<sup>Required</sup> <a name="internetGatewayBlockMode" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.internetGatewayBlockMode"></a>

```typescript
public readonly internetGatewayBlockMode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcBlockPublicAccessOptionsConfig <a name="VpcBlockPublicAccessOptionsConfig" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.Initializer"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

const vpcBlockPublicAccessOptionsConfig: vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.internetGatewayBlockMode">internetGatewayBlockMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#internet_gateway_block_mode VpcBlockPublicAccessOptions#internet_gateway_block_mode}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `internetGatewayBlockMode`<sup>Required</sup> <a name="internetGatewayBlockMode" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.internetGatewayBlockMode"></a>

```typescript
public readonly internetGatewayBlockMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#internet_gateway_block_mode VpcBlockPublicAccessOptions#internet_gateway_block_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#region VpcBlockPublicAccessOptions#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcBlockPublicAccessOptionsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#timeouts VpcBlockPublicAccessOptions#timeouts}

---

### VpcBlockPublicAccessOptionsTimeouts <a name="VpcBlockPublicAccessOptionsTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.Initializer"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

const vpcBlockPublicAccessOptionsTimeouts: vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#create VpcBlockPublicAccessOptions#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#delete VpcBlockPublicAccessOptions#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/vpc_block_public_access_options#update VpcBlockPublicAccessOptions#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcBlockPublicAccessOptionsTimeoutsOutputReference <a name="VpcBlockPublicAccessOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcBlockPublicAccessOptions } from '@cdktf/provider-aws'

new vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcBlockPublicAccessOptionsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcBlockPublicAccessOptions.VpcBlockPublicAccessOptionsTimeouts">VpcBlockPublicAccessOptionsTimeouts</a>

---



