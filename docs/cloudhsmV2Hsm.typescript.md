# `cloudhsmV2Hsm` Submodule <a name="`cloudhsmV2Hsm` Submodule" id="@cdktf/provider-aws.cloudhsmV2Hsm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudhsmV2Hsm <a name="CloudhsmV2Hsm" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm aws_cloudhsm_v2_hsm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

new cloudhsmV2Hsm.CloudhsmV2Hsm(scope: Construct, id: string, config: CloudhsmV2HsmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig">CloudhsmV2HsmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig">CloudhsmV2HsmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudhsmV2HsmTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudhsmV2Hsm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isConstruct"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

cloudhsmV2Hsm.CloudhsmV2Hsm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformElement"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformResource"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudhsmV2Hsm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudhsmV2Hsm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudhsmV2Hsm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudhsmV2Hsm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.hsmEniId">hsmEniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.hsmId">hsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.hsmState">hsmState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference">CloudhsmV2HsmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hsmEniId`<sup>Required</sup> <a name="hsmEniId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.hsmEniId"></a>

```typescript
public readonly hsmEniId: string;
```

- *Type:* string

---

##### `hsmId`<sup>Required</sup> <a name="hsmId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.hsmId"></a>

```typescript
public readonly hsmId: string;
```

- *Type:* string

---

##### `hsmState`<sup>Required</sup> <a name="hsmState" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.hsmState"></a>

```typescript
public readonly hsmState: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.timeouts"></a>

```typescript
public readonly timeouts: CloudhsmV2HsmTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference">CloudhsmV2HsmTimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudhsmV2HsmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2Hsm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudhsmV2HsmConfig <a name="CloudhsmV2HsmConfig" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.Initializer"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

const cloudhsmV2HsmConfig: cloudhsmV2Hsm.CloudhsmV2HsmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#cluster_id CloudhsmV2Hsm#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#availability_zone CloudhsmV2Hsm#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#id CloudhsmV2Hsm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#ip_address CloudhsmV2Hsm#ip_address}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#subnet_id CloudhsmV2Hsm#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#cluster_id CloudhsmV2Hsm#cluster_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#availability_zone CloudhsmV2Hsm#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#id CloudhsmV2Hsm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#ip_address CloudhsmV2Hsm#ip_address}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#region CloudhsmV2Hsm#region}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#subnet_id CloudhsmV2Hsm#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudhsmV2HsmTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#timeouts CloudhsmV2Hsm#timeouts}

---

### CloudhsmV2HsmTimeouts <a name="CloudhsmV2HsmTimeouts" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts.Initializer"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

const cloudhsmV2HsmTimeouts: cloudhsmV2Hsm.CloudhsmV2HsmTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#create CloudhsmV2Hsm#create}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#delete CloudhsmV2Hsm#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#create CloudhsmV2Hsm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cloudhsm_v2_hsm#delete CloudhsmV2Hsm#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudhsmV2HsmTimeoutsOutputReference <a name="CloudhsmV2HsmTimeoutsOutputReference" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudhsmV2Hsm } from '@cdktf/provider-aws'

new cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudhsmV2HsmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudhsmV2Hsm.CloudhsmV2HsmTimeouts">CloudhsmV2HsmTimeouts</a>

---



