# `ec2AvailabilityZoneGroup` Submodule <a name="`ec2AvailabilityZoneGroup` Submodule" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AvailabilityZoneGroup <a name="Ec2AvailabilityZoneGroup" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group aws_ec2_availability_zone_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer"></a>

```typescript
import { ec2AvailabilityZoneGroup } from '@cdktf/provider-aws'

new ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup(scope: Construct, id: string, config: Ec2AvailabilityZoneGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig">Ec2AvailabilityZoneGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig">Ec2AvailabilityZoneGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2AvailabilityZoneGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct"></a>

```typescript
import { ec2AvailabilityZoneGroup } from '@cdktf/provider-aws'

ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement"></a>

```typescript
import { ec2AvailabilityZoneGroup } from '@cdktf/provider-aws'

ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource"></a>

```typescript
import { ec2AvailabilityZoneGroup } from '@cdktf/provider-aws'

ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport"></a>

```typescript
import { ec2AvailabilityZoneGroup } from '@cdktf/provider-aws'

ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2AvailabilityZoneGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2AvailabilityZoneGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2AvailabilityZoneGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2AvailabilityZoneGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatusInput">optInStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatus">optInStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `optInStatusInput`<sup>Optional</sup> <a name="optInStatusInput" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatusInput"></a>

```typescript
public readonly optInStatusInput: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.optInStatus"></a>

```typescript
public readonly optInStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2AvailabilityZoneGroupConfig <a name="Ec2AvailabilityZoneGroupConfig" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.Initializer"></a>

```typescript
import { ec2AvailabilityZoneGroup } from '@cdktf/provider-aws'

const ec2AvailabilityZoneGroupConfig: ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.optInStatus">optInStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}. |
| <code><a href="#@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}.

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.optInStatus"></a>

```typescript
public readonly optInStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2AvailabilityZoneGroup.Ec2AvailabilityZoneGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



