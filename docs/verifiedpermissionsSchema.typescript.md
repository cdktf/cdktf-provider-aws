# `verifiedpermissionsSchema` Submodule <a name="`verifiedpermissionsSchema` Submodule" id="@cdktf/provider-aws.verifiedpermissionsSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsSchema <a name="VerifiedpermissionsSchema" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema aws_verifiedpermissions_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

new verifiedpermissionsSchema.VerifiedpermissionsSchema(scope: Construct, id: string, config: VerifiedpermissionsSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig">VerifiedpermissionsSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig">VerifiedpermissionsSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition"></a>

```typescript
public putDefinition(value: IResolvable | VerifiedpermissionsSchemaDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedpermissionsSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedpermissionsSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList">VerifiedpermissionsSchemaDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definitionInput">definitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreIdInput">policyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definition"></a>

```typescript
public readonly definition: VerifiedpermissionsSchemaDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList">VerifiedpermissionsSchemaDefinitionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | VerifiedpermissionsSchemaDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]

---

##### `policyStoreIdInput`<sup>Optional</sup> <a name="policyStoreIdInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreIdInput"></a>

```typescript
public readonly policyStoreIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsSchemaConfig <a name="VerifiedpermissionsSchemaConfig" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.Initializer"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

const verifiedpermissionsSchemaConfig: verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.definition">definition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.definition"></a>

```typescript
public readonly definition: IResolvable | VerifiedpermissionsSchemaDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#definition VerifiedpermissionsSchema#definition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#region VerifiedpermissionsSchema#region}

---

### VerifiedpermissionsSchemaDefinition <a name="VerifiedpermissionsSchemaDefinition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.Initializer"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

const verifiedpermissionsSchemaDefinition: verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsSchemaDefinitionList <a name="VerifiedpermissionsSchemaDefinitionList" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

new verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsSchemaDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsSchemaDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>[]

---


### VerifiedpermissionsSchemaDefinitionOutputReference <a name="VerifiedpermissionsSchemaDefinitionOutputReference" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsSchema } from '@cdktf/provider-aws'

new verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsSchemaDefinition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>

---



