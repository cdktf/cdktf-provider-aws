# `iotAuthorizer` Submodule <a name="`iotAuthorizer` Submodule" id="@cdktf/provider-aws.iotAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotAuthorizer <a name="IotAuthorizer" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer aws_iot_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktf/provider-aws'

new iotAuthorizer.IotAuthorizer(scope: Construct, id: string, config: IotAuthorizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig">IotAuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig">IotAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetEnableCachingForHttp">resetEnableCachingForHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetSigningDisabled">resetSigningDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenKeyName">resetTokenKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenSigningPublicKeys">resetTokenSigningPublicKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnableCachingForHttp` <a name="resetEnableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetEnableCachingForHttp"></a>

```typescript
public resetEnableCachingForHttp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSigningDisabled` <a name="resetSigningDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetSigningDisabled"></a>

```typescript
public resetSigningDisabled(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTokenKeyName` <a name="resetTokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenKeyName"></a>

```typescript
public resetTokenKeyName(): void
```

##### `resetTokenSigningPublicKeys` <a name="resetTokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenSigningPublicKeys"></a>

```typescript
public resetTokenSigningPublicKeys(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotAuthorizer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isConstruct"></a>

```typescript
import { iotAuthorizer } from '@cdktf/provider-aws'

iotAuthorizer.IotAuthorizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformElement"></a>

```typescript
import { iotAuthorizer } from '@cdktf/provider-aws'

iotAuthorizer.IotAuthorizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformResource"></a>

```typescript
import { iotAuthorizer } from '@cdktf/provider-aws'

iotAuthorizer.IotAuthorizer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport"></a>

```typescript
import { iotAuthorizer } from '@cdktf/provider-aws'

iotAuthorizer.IotAuthorizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotAuthorizer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArnInput">authorizerFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttpInput">enableCachingForHttpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabledInput">signingDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyNameInput">tokenKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeysInput">tokenSigningPublicKeysInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttp">enableCachingForHttp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabled">signingDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyName">tokenKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authorizerFunctionArnInput`<sup>Optional</sup> <a name="authorizerFunctionArnInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArnInput"></a>

```typescript
public readonly authorizerFunctionArnInput: string;
```

- *Type:* string

---

##### `enableCachingForHttpInput`<sup>Optional</sup> <a name="enableCachingForHttpInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttpInput"></a>

```typescript
public readonly enableCachingForHttpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `signingDisabledInput`<sup>Optional</sup> <a name="signingDisabledInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabledInput"></a>

```typescript
public readonly signingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tokenKeyNameInput`<sup>Optional</sup> <a name="tokenKeyNameInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyNameInput"></a>

```typescript
public readonly tokenKeyNameInput: string;
```

- *Type:* string

---

##### `tokenSigningPublicKeysInput`<sup>Optional</sup> <a name="tokenSigningPublicKeysInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeysInput"></a>

```typescript
public readonly tokenSigningPublicKeysInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArn"></a>

```typescript
public readonly authorizerFunctionArn: string;
```

- *Type:* string

---

##### `enableCachingForHttp`<sup>Required</sup> <a name="enableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttp"></a>

```typescript
public readonly enableCachingForHttp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `signingDisabled`<sup>Required</sup> <a name="signingDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabled"></a>

```typescript
public readonly signingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tokenKeyName`<sup>Required</sup> <a name="tokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyName"></a>

```typescript
public readonly tokenKeyName: string;
```

- *Type:* string

---

##### `tokenSigningPublicKeys`<sup>Required</sup> <a name="tokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeys"></a>

```typescript
public readonly tokenSigningPublicKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotAuthorizerConfig <a name="IotAuthorizerConfig" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktf/provider-aws'

const iotAuthorizerConfig: iotAuthorizer.IotAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.enableCachingForHttp">enableCachingForHttp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.signingDisabled">signingDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenKeyName">tokenKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.authorizerFunctionArn"></a>

```typescript
public readonly authorizerFunctionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}.

---

##### `enableCachingForHttp`<sup>Optional</sup> <a name="enableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.enableCachingForHttp"></a>

```typescript
public readonly enableCachingForHttp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#region IotAuthorizer#region}

---

##### `signingDisabled`<sup>Optional</sup> <a name="signingDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.signingDisabled"></a>

```typescript
public readonly signingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}.

---

##### `tokenKeyName`<sup>Optional</sup> <a name="tokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenKeyName"></a>

```typescript
public readonly tokenKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}.

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="tokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenSigningPublicKeys"></a>

```typescript
public readonly tokenSigningPublicKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}.

---



