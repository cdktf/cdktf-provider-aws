# `s3ControlAccessGrantsLocation` Submodule <a name="`s3ControlAccessGrantsLocation` Submodule" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlAccessGrantsLocation <a name="S3ControlAccessGrantsLocation" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location aws_s3control_access_grants_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer"></a>

```typescript
import { s3ControlAccessGrantsLocation } from '@cdktf/provider-aws'

new s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation(scope: Construct, id: string, config: S3ControlAccessGrantsLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig">S3ControlAccessGrantsLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig">S3ControlAccessGrantsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3ControlAccessGrantsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct"></a>

```typescript
import { s3ControlAccessGrantsLocation } from '@cdktf/provider-aws'

s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement"></a>

```typescript
import { s3ControlAccessGrantsLocation } from '@cdktf/provider-aws'

s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource"></a>

```typescript
import { s3ControlAccessGrantsLocation } from '@cdktf/provider-aws'

s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport"></a>

```typescript
import { s3ControlAccessGrantsLocation } from '@cdktf/provider-aws'

s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3ControlAccessGrantsLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ControlAccessGrantsLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ControlAccessGrantsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlAccessGrantsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationArn">accessGrantsLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationId">accessGrantsLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScopeInput">locationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScope">locationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessGrantsLocationArn`<sup>Required</sup> <a name="accessGrantsLocationArn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationArn"></a>

```typescript
public readonly accessGrantsLocationArn: string;
```

- *Type:* string

---

##### `accessGrantsLocationId`<sup>Required</sup> <a name="accessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationId"></a>

```typescript
public readonly accessGrantsLocationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `locationScopeInput`<sup>Optional</sup> <a name="locationScopeInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScopeInput"></a>

```typescript
public readonly locationScopeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `locationScope`<sup>Required</sup> <a name="locationScope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScope"></a>

```typescript
public readonly locationScope: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlAccessGrantsLocationConfig <a name="S3ControlAccessGrantsLocationConfig" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.Initializer"></a>

```typescript
import { s3ControlAccessGrantsLocation } from '@cdktf/provider-aws'

const s3ControlAccessGrantsLocationConfig: s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#iam_role_arn S3ControlAccessGrantsLocation#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.locationScope">locationScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#location_scope S3ControlAccessGrantsLocation#location_scope}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#account_id S3ControlAccessGrantsLocation#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#tags S3ControlAccessGrantsLocation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#iam_role_arn S3ControlAccessGrantsLocation#iam_role_arn}.

---

##### `locationScope`<sup>Required</sup> <a name="locationScope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.locationScope"></a>

```typescript
public readonly locationScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#location_scope S3ControlAccessGrantsLocation#location_scope}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#account_id S3ControlAccessGrantsLocation#account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/s3control_access_grants_location#tags S3ControlAccessGrantsLocation#tags}.

---



