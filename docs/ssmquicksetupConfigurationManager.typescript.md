# `ssmquicksetupConfigurationManager` Submodule <a name="`ssmquicksetupConfigurationManager` Submodule" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupConfigurationManager <a name="SsmquicksetupConfigurationManager" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager aws_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

new ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager(scope: Construct, id: string, config: SsmquicksetupConfigurationManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig">SsmquicksetupConfigurationManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig">SsmquicksetupConfigurationManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinition">putConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetConfigurationDefinition">resetConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationDefinition` <a name="putConfigurationDefinition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinition"></a>

```typescript
public putConfigurationDefinition(value: IResolvable | SsmquicksetupConfigurationManagerConfigurationDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts"></a>

```typescript
public putTimeouts(value: SsmquicksetupConfigurationManagerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>

---

##### `resetConfigurationDefinition` <a name="resetConfigurationDefinition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetConfigurationDefinition"></a>

```typescript
public resetConfigurationDefinition(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsmquicksetupConfigurationManager resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsmquicksetupConfigurationManager resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmquicksetupConfigurationManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinition">configurationDefinition</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList">SsmquicksetupConfigurationManagerConfigurationDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn">managerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries">statusSummaries</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference">SsmquicksetupConfigurationManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionInput">configurationDefinitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationDefinition`<sup>Required</sup> <a name="configurationDefinition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinition"></a>

```typescript
public readonly configurationDefinition: SsmquicksetupConfigurationManagerConfigurationDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList">SsmquicksetupConfigurationManagerConfigurationDefinitionList</a>

---

##### `managerArn`<sup>Required</sup> <a name="managerArn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn"></a>

```typescript
public readonly managerArn: string;
```

- *Type:* string

---

##### `statusSummaries`<sup>Required</sup> <a name="statusSummaries" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries"></a>

```typescript
public readonly statusSummaries: SsmquicksetupConfigurationManagerStatusSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeouts"></a>

```typescript
public readonly timeouts: SsmquicksetupConfigurationManagerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference">SsmquicksetupConfigurationManagerTimeoutsOutputReference</a>

---

##### `configurationDefinitionInput`<sup>Optional</sup> <a name="configurationDefinitionInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionInput"></a>

```typescript
public readonly configurationDefinitionInput: IResolvable | SsmquicksetupConfigurationManagerConfigurationDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SsmquicksetupConfigurationManagerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupConfigurationManagerConfig <a name="SsmquicksetupConfigurationManagerConfig" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

const ssmquicksetupConfigurationManagerConfig: ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinition">configurationDefinition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]</code> | configuration_definition block. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}.

---

##### `configurationDefinition`<sup>Optional</sup> <a name="configurationDefinition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinition"></a>

```typescript
public readonly configurationDefinition: IResolvable | SsmquicksetupConfigurationManagerConfigurationDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]

configuration_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definition SsmquicksetupConfigurationManager#configuration_definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#region SsmquicksetupConfigurationManager#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SsmquicksetupConfigurationManagerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#timeouts SsmquicksetupConfigurationManager#timeouts}

---

### SsmquicksetupConfigurationManagerConfigurationDefinition <a name="SsmquicksetupConfigurationManagerConfigurationDefinition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

const ssmquicksetupConfigurationManagerConfigurationDefinition: ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentAdministrationRoleArn">localDeploymentAdministrationRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentExecutionRoleName">localDeploymentExecutionRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.typeVersion">typeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}. |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}.

---

##### `localDeploymentAdministrationRoleArn`<sup>Optional</sup> <a name="localDeploymentAdministrationRoleArn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentAdministrationRoleArn"></a>

```typescript
public readonly localDeploymentAdministrationRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}.

---

##### `localDeploymentExecutionRoleName`<sup>Optional</sup> <a name="localDeploymentExecutionRoleName" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentExecutionRoleName"></a>

```typescript
public readonly localDeploymentExecutionRoleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}.

---

##### `typeVersion`<sup>Optional</sup> <a name="typeVersion" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.typeVersion"></a>

```typescript
public readonly typeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}.

---

### SsmquicksetupConfigurationManagerStatusSummaries <a name="SsmquicksetupConfigurationManagerStatusSummaries" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

const ssmquicksetupConfigurationManagerStatusSummaries: ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries = { ... }
```


### SsmquicksetupConfigurationManagerTimeouts <a name="SsmquicksetupConfigurationManagerTimeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

const ssmquicksetupConfigurationManagerTimeouts: ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#create SsmquicksetupConfigurationManager#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#delete SsmquicksetupConfigurationManager#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ssmquicksetup_configuration_manager#update SsmquicksetupConfigurationManager#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmquicksetupConfigurationManagerConfigurationDefinitionList <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionList" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

new ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.get"></a>

```typescript
public get(index: number): SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmquicksetupConfigurationManagerConfigurationDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>[]

---


### SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

new ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentAdministrationRoleArn">resetLocalDeploymentAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentExecutionRoleName">resetLocalDeploymentExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetTypeVersion">resetTypeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalDeploymentAdministrationRoleArn` <a name="resetLocalDeploymentAdministrationRoleArn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentAdministrationRoleArn"></a>

```typescript
public resetLocalDeploymentAdministrationRoleArn(): void
```

##### `resetLocalDeploymentExecutionRoleName` <a name="resetLocalDeploymentExecutionRoleName" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentExecutionRoleName"></a>

```typescript
public resetLocalDeploymentExecutionRoleName(): void
```

##### `resetTypeVersion` <a name="resetTypeVersion" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetTypeVersion"></a>

```typescript
public resetTypeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArnInput">localDeploymentAdministrationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleNameInput">localDeploymentExecutionRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersionInput">typeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArn">localDeploymentAdministrationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleName">localDeploymentExecutionRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersion">typeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localDeploymentAdministrationRoleArnInput`<sup>Optional</sup> <a name="localDeploymentAdministrationRoleArnInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArnInput"></a>

```typescript
public readonly localDeploymentAdministrationRoleArnInput: string;
```

- *Type:* string

---

##### `localDeploymentExecutionRoleNameInput`<sup>Optional</sup> <a name="localDeploymentExecutionRoleNameInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleNameInput"></a>

```typescript
public readonly localDeploymentExecutionRoleNameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeVersionInput`<sup>Optional</sup> <a name="typeVersionInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersionInput"></a>

```typescript
public readonly typeVersionInput: string;
```

- *Type:* string

---

##### `localDeploymentAdministrationRoleArn`<sup>Required</sup> <a name="localDeploymentAdministrationRoleArn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```typescript
public readonly localDeploymentAdministrationRoleArn: string;
```

- *Type:* string

---

##### `localDeploymentExecutionRoleName`<sup>Required</sup> <a name="localDeploymentExecutionRoleName" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleName"></a>

```typescript
public readonly localDeploymentExecutionRoleName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeVersion`<sup>Required</sup> <a name="typeVersion" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersion"></a>

```typescript
public readonly typeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmquicksetupConfigurationManagerConfigurationDefinition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>

---


### SsmquicksetupConfigurationManagerStatusSummariesList <a name="SsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

new ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```typescript
public get(index: number): SsmquicksetupConfigurationManagerStatusSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="SsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

new ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">statusType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `statusType`<sup>Required</sup> <a name="statusType" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```typescript
public readonly statusType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmquicksetupConfigurationManagerStatusSummaries;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a>

---


### SsmquicksetupConfigurationManagerTimeoutsOutputReference <a name="SsmquicksetupConfigurationManagerTimeoutsOutputReference" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer"></a>

```typescript
import { ssmquicksetupConfigurationManager } from '@cdktf/provider-aws'

new ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmquicksetupConfigurationManagerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>

---



