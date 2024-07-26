# `securitylakeDataLake` Submodule <a name="`securitylakeDataLake` Submodule" id="@cdktf/provider-aws.securitylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeDataLake <a name="SecuritylakeDataLake" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake aws_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLake(scope: Construct, id: string, config: SecuritylakeDataLakeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration"></a>

```typescript
public putConfiguration(value: IResolvable | SecuritylakeDataLakeConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts"></a>

```typescript
public putTimeouts(value: SecuritylakeDataLakeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

securitylakeDataLake.SecuritylakeDataLake.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

securitylakeDataLake.SecuritylakeDataLake.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

securitylakeDataLake.SecuritylakeDataLake.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeDataLake to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList">SecuritylakeDataLakeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference">SecuritylakeDataLakeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configurationInput">configurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput">metaStoreManagerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configuration"></a>

```typescript
public readonly configuration: SecuritylakeDataLakeConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList">SecuritylakeDataLakeConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeouts"></a>

```typescript
public readonly timeouts: SecuritylakeDataLakeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference">SecuritylakeDataLakeTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | SecuritylakeDataLakeConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]

---

##### `metaStoreManagerRoleArnInput`<sup>Optional</sup> <a name="metaStoreManagerRoleArnInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput"></a>

```typescript
public readonly metaStoreManagerRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecuritylakeDataLakeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---

##### `metaStoreManagerRoleArn`<sup>Required</sup> <a name="metaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```typescript
public readonly metaStoreManagerRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeDataLakeConfig <a name="SecuritylakeDataLakeConfig" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfig: securitylakeDataLake.SecuritylakeDataLakeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.configuration">configuration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metaStoreManagerRoleArn`<sup>Required</sup> <a name="metaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn"></a>

```typescript
public readonly metaStoreManagerRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.configuration"></a>

```typescript
public readonly configuration: IResolvable | SecuritylakeDataLakeConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#configuration SecuritylakeDataLake#configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecuritylakeDataLakeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#timeouts SecuritylakeDataLake#timeouts}

---

### SecuritylakeDataLakeConfiguration <a name="SecuritylakeDataLakeConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfiguration: securitylakeDataLake.SecuritylakeDataLakeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]</code> | lifecycle_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.replicationConfiguration">replicationConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]</code> | replication_configuration block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: IResolvable | SecuritylakeDataLakeConfigurationEncryptionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}.

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]

lifecycle_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: IResolvable | SecuritylakeDataLakeConfigurationReplicationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}

---

### SecuritylakeDataLakeConfigurationEncryptionConfiguration <a name="SecuritylakeDataLakeConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfigurationEncryptionConfiguration: securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}.

---

### SecuritylakeDataLakeConfigurationLifecycleConfiguration <a name="SecuritylakeDataLakeConfigurationLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfigurationLifecycleConfiguration: securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.expiration">expiration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]</code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.transition">transition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]</code> | transition block. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.expiration"></a>

```typescript
public readonly expiration: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.transition"></a>

```typescript
public readonly transition: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]

transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#transition SecuritylakeDataLake#transition}

---

### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfigurationLifecycleConfigurationExpiration: securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}.

---

### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfigurationLifecycleConfigurationTransition: securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}.

---

### SecuritylakeDataLakeConfigurationReplicationConfiguration <a name="SecuritylakeDataLakeConfigurationReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeConfigurationReplicationConfiguration: securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}. |

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}.

---

### SecuritylakeDataLakeTimeouts <a name="SecuritylakeDataLakeTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

const securitylakeDataLakeTimeouts: securitylakeDataLake.SecuritylakeDataLakeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#create SecuritylakeDataLake#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#delete SecuritylakeDataLake#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/securitylake_data_lake#update SecuritylakeDataLake#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeDataLakeConfigurationEncryptionConfigurationList <a name="SecuritylakeDataLakeConfigurationEncryptionConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationEncryptionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]

---


### SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationEncryptionConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition">putTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetTransition">resetTransition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]

---

##### `putTransition` <a name="putTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition"></a>

```typescript
public putTransition(value: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetTransition` <a name="resetTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetTransition"></a>

```typescript
public resetTransition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expirationInput">expirationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transitionInput">transitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expiration"></a>

```typescript
public readonly expiration: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transition"></a>

```typescript
public readonly transition: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>[]

---

##### `transitionInput`<sup>Optional</sup> <a name="transitionInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transitionInput"></a>

```typescript
public readonly transitionInput: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>[]

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>

---


### SecuritylakeDataLakeConfigurationList <a name="SecuritylakeDataLakeConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>[]

---


### SecuritylakeDataLakeConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: IResolvable | SecuritylakeDataLakeConfigurationEncryptionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration"></a>

```typescript
public putLifecycleConfiguration(value: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: IResolvable | SecuritylakeDataLakeConfigurationReplicationConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetLifecycleConfiguration"></a>

```typescript
public resetLifecycleConfiguration(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList">SecuritylakeDataLakeConfigurationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList">SecuritylakeDataLakeConfigurationReplicationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: SecuritylakeDataLakeConfigurationEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList">SecuritylakeDataLakeConfigurationEncryptionConfigurationList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: SecuritylakeDataLakeConfigurationLifecycleConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationList</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: SecuritylakeDataLakeConfigurationReplicationConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList">SecuritylakeDataLakeConfigurationReplicationConfigurationList</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | SecuritylakeDataLakeConfigurationEncryptionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>[]

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfigurationInput"></a>

```typescript
public readonly lifecycleConfigurationInput: IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: IResolvable | SecuritylakeDataLakeConfigurationReplicationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>

---


### SecuritylakeDataLakeConfigurationReplicationConfigurationList <a name="SecuritylakeDataLakeConfigurationReplicationConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationReplicationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>[]

---


### SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeConfigurationReplicationConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>

---


### SecuritylakeDataLakeTimeoutsOutputReference <a name="SecuritylakeDataLakeTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktf/provider-aws'

new securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---



