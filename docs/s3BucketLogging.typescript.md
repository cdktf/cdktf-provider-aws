# `s3BucketLogging` Submodule <a name="`s3BucketLogging` Submodule" id="@cdktf/provider-aws.s3BucketLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketLoggingA <a name="S3BucketLoggingA" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingA(scope: Construct, id: string, config: S3BucketLoggingAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig">S3BucketLoggingAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig">S3BucketLoggingAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant">putTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat">putTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant">resetTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat">resetTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetGrant` <a name="putTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant"></a>

```typescript
public putTargetGrant(value: IResolvable | S3BucketLoggingTargetGrant[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]

---

##### `putTargetObjectKeyFormat` <a name="putTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat"></a>

```typescript
public putTargetObjectKeyFormat(value: S3BucketLoggingTargetObjectKeyFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetGrant` <a name="resetTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant"></a>

```typescript
public resetTargetGrant(): void
```

##### `resetTargetObjectKeyFormat` <a name="resetTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat"></a>

```typescript
public resetTargetObjectKeyFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

s3BucketLogging.S3BucketLoggingA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

s3BucketLogging.S3BucketLoggingA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

s3BucketLogging.S3BucketLoggingA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

s3BucketLogging.S3BucketLoggingA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketLoggingA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketLoggingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketLoggingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant">targetGrant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput">targetBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput">targetGrantInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput">targetObjectKeyFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput">targetPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket">targetBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix">targetPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetGrant`<sup>Required</sup> <a name="targetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant"></a>

```typescript
public readonly targetGrant: S3BucketLoggingTargetGrantList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a>

---

##### `targetObjectKeyFormat`<sup>Required</sup> <a name="targetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat"></a>

```typescript
public readonly targetObjectKeyFormat: S3BucketLoggingTargetObjectKeyFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetBucketInput`<sup>Optional</sup> <a name="targetBucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput"></a>

```typescript
public readonly targetBucketInput: string;
```

- *Type:* string

---

##### `targetGrantInput`<sup>Optional</sup> <a name="targetGrantInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput"></a>

```typescript
public readonly targetGrantInput: IResolvable | S3BucketLoggingTargetGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]

---

##### `targetObjectKeyFormatInput`<sup>Optional</sup> <a name="targetObjectKeyFormatInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput"></a>

```typescript
public readonly targetObjectKeyFormatInput: S3BucketLoggingTargetObjectKeyFormat;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `targetPrefixInput`<sup>Optional</sup> <a name="targetPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput"></a>

```typescript
public readonly targetPrefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix"></a>

```typescript
public readonly targetPrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketLoggingAConfig <a name="S3BucketLoggingAConfig" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

const s3BucketLoggingAConfig: s3BucketLogging.S3BucketLoggingAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket">targetBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix">targetPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant">targetGrant</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]</code> | target_grant block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | target_object_key_format block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}.

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}.

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix"></a>

```typescript
public readonly targetPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetGrant`<sup>Optional</sup> <a name="targetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant"></a>

```typescript
public readonly targetGrant: IResolvable | S3BucketLoggingTargetGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]

target_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat"></a>

```typescript
public readonly targetObjectKeyFormat: S3BucketLoggingTargetObjectKeyFormat;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

target_object_key_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}

---

### S3BucketLoggingTargetGrant <a name="S3BucketLoggingTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

const s3BucketLoggingTargetGrant: s3BucketLogging.S3BucketLoggingTargetGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}. |

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee"></a>

```typescript
public readonly grantee: S3BucketLoggingTargetGrantGrantee;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#grantee S3BucketLoggingA#grantee}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}.

---

### S3BucketLoggingTargetGrantGrantee <a name="S3BucketLoggingTargetGrantGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

const s3BucketLoggingTargetGrantGrantee: s3BucketLogging.S3BucketLoggingTargetGrantGrantee = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}.

---

### S3BucketLoggingTargetObjectKeyFormat <a name="S3BucketLoggingTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

const s3BucketLoggingTargetObjectKeyFormat: s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix">partitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | partitioned_prefix block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix">simplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | simple_prefix block. |

---

##### `partitionedPrefix`<sup>Optional</sup> <a name="partitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix"></a>

```typescript
public readonly partitionedPrefix: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

partitioned_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#partitioned_prefix S3BucketLoggingA#partitioned_prefix}

---

##### `simplePrefix`<sup>Optional</sup> <a name="simplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix"></a>

```typescript
public readonly simplePrefix: S3BucketLoggingTargetObjectKeyFormatSimplePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

simple_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#simple_prefix S3BucketLoggingA#simple_prefix}

---

### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

const s3BucketLoggingTargetObjectKeyFormatPartitionedPrefix: s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource">partitionDateSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}. |

---

##### `partitionDateSource`<sup>Required</sup> <a name="partitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource"></a>

```typescript
public readonly partitionDateSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}.

---

### S3BucketLoggingTargetObjectKeyFormatSimplePrefix <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

const s3BucketLoggingTargetObjectKeyFormatSimplePrefix: s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### S3BucketLoggingTargetGrantGranteeOutputReference <a name="S3BucketLoggingTargetGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLoggingTargetGrantGrantee;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


### S3BucketLoggingTargetGrantList <a name="S3BucketLoggingTargetGrantList" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingTargetGrantList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get"></a>

```typescript
public get(index: number): S3BucketLoggingTargetGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketLoggingTargetGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>[]

---


### S3BucketLoggingTargetGrantOutputReference <a name="S3BucketLoggingTargetGrantOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingTargetGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee">putGrantee</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrantee` <a name="putGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee"></a>

```typescript
public putGrantee(value: S3BucketLoggingTargetGrantGrantee): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput">granteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee"></a>

```typescript
public readonly grantee: S3BucketLoggingTargetGrantGranteeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a>

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput"></a>

```typescript
public readonly granteeInput: S3BucketLoggingTargetGrantGrantee;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketLoggingTargetGrant;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant">S3BucketLoggingTargetGrant</a>

---


### S3BucketLoggingTargetObjectKeyFormatOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix">putPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix">putSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix">resetPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix">resetSimplePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionedPrefix` <a name="putPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix"></a>

```typescript
public putPartitionedPrefix(value: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `putSimplePrefix` <a name="putSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix"></a>

```typescript
public putSimplePrefix(value: S3BucketLoggingTargetObjectKeyFormatSimplePrefix): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `resetPartitionedPrefix` <a name="resetPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix"></a>

```typescript
public resetPartitionedPrefix(): void
```

##### `resetSimplePrefix` <a name="resetSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix"></a>

```typescript
public resetSimplePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix">partitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix">simplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput">partitionedPrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput">simplePrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionedPrefix`<sup>Required</sup> <a name="partitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix"></a>

```typescript
public readonly partitionedPrefix: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a>

---

##### `simplePrefix`<sup>Required</sup> <a name="simplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix"></a>

```typescript
public readonly simplePrefix: S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a>

---

##### `partitionedPrefixInput`<sup>Optional</sup> <a name="partitionedPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput"></a>

```typescript
public readonly partitionedPrefixInput: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `simplePrefixInput`<sup>Optional</sup> <a name="simplePrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput"></a>

```typescript
public readonly simplePrefixInput: S3BucketLoggingTargetObjectKeyFormatSimplePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLoggingTargetObjectKeyFormat;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---


### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput">partitionDateSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource">partitionDateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionDateSourceInput`<sup>Optional</sup> <a name="partitionDateSourceInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput"></a>

```typescript
public readonly partitionDateSourceInput: string;
```

- *Type:* string

---

##### `partitionDateSource`<sup>Required</sup> <a name="partitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource"></a>

```typescript
public readonly partitionDateSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---


### S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer"></a>

```typescript
import { s3BucketLogging } from '@cdktf/provider-aws'

new s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLoggingTargetObjectKeyFormatSimplePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---



