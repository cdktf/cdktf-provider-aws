# `codecatalystDevEnvironment` Submodule <a name="`codecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.codecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecatalystDevEnvironment <a name="CodecatalystDevEnvironment" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

new codecatalystDevEnvironment.CodecatalystDevEnvironment(scope: Construct, id: string, config: CodecatalystDevEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig">CodecatalystDevEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig">CodecatalystDevEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes">putIdes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage">putPersistentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories">putRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetInactivityTimeoutMinutes">resetInactivityTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdes` <a name="putIdes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes"></a>

```typescript
public putIdes(value: CodecatalystDevEnvironmentIdes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---

##### `putPersistentStorage` <a name="putPersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage"></a>

```typescript
public putPersistentStorage(value: CodecatalystDevEnvironmentPersistentStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---

##### `putRepositories` <a name="putRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories"></a>

```typescript
public putRepositories(value: IResolvable | CodecatalystDevEnvironmentRepositories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: CodecatalystDevEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInactivityTimeoutMinutes` <a name="resetInactivityTimeoutMinutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetInactivityTimeoutMinutes"></a>

```typescript
public resetInactivityTimeoutMinutes(): void
```

##### `resetRepositories` <a name="resetRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetRepositories"></a>

```typescript
public resetRepositories(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodecatalystDevEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodecatalystDevEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodecatalystDevEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference">CodecatalystDevEnvironmentIdesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorage">persistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference">CodecatalystDevEnvironmentPersistentStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList">CodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference">CodecatalystDevEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idesInput">idesInput</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutesInput">inactivityTimeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorageInput">persistentStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositoriesInput">repositoriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceNameInput">spaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutes">inactivityTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceName">spaceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.ides"></a>

```typescript
public readonly ides: CodecatalystDevEnvironmentIdesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference">CodecatalystDevEnvironmentIdesOutputReference</a>

---

##### `persistentStorage`<sup>Required</sup> <a name="persistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorage"></a>

```typescript
public readonly persistentStorage: CodecatalystDevEnvironmentPersistentStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference">CodecatalystDevEnvironmentPersistentStorageOutputReference</a>

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositories"></a>

```typescript
public readonly repositories: CodecatalystDevEnvironmentRepositoriesList;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList">CodecatalystDevEnvironmentRepositoriesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: CodecatalystDevEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference">CodecatalystDevEnvironmentTimeoutsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `idesInput`<sup>Optional</sup> <a name="idesInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idesInput"></a>

```typescript
public readonly idesInput: CodecatalystDevEnvironmentIdes;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inactivityTimeoutMinutesInput`<sup>Optional</sup> <a name="inactivityTimeoutMinutesInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutesInput"></a>

```typescript
public readonly inactivityTimeoutMinutesInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `persistentStorageInput`<sup>Optional</sup> <a name="persistentStorageInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorageInput"></a>

```typescript
public readonly persistentStorageInput: CodecatalystDevEnvironmentPersistentStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: IResolvable | CodecatalystDevEnvironmentRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]

---

##### `spaceNameInput`<sup>Optional</sup> <a name="spaceNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceNameInput"></a>

```typescript
public readonly spaceNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CodecatalystDevEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inactivityTimeoutMinutes`<sup>Required</sup> <a name="inactivityTimeoutMinutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```typescript
public readonly inactivityTimeoutMinutes: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceName"></a>

```typescript
public readonly spaceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecatalystDevEnvironmentConfig <a name="CodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

const codecatalystDevEnvironmentConfig: codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | ides block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.persistentStorage">persistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | persistent_storage block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.projectName">projectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.spaceName">spaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.inactivityTimeoutMinutes">inactivityTimeoutMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.repositories">repositories</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.ides"></a>

```typescript
public readonly ides: CodecatalystDevEnvironmentIdes;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

ides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#ides CodecatalystDevEnvironment#ides}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}.

---

##### `persistentStorage`<sup>Required</sup> <a name="persistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.persistentStorage"></a>

```typescript
public readonly persistentStorage: CodecatalystDevEnvironmentPersistentStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

persistent_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#persistent_storage CodecatalystDevEnvironment#persistent_storage}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}.

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.spaceName"></a>

```typescript
public readonly spaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivityTimeoutMinutes`<sup>Optional</sup> <a name="inactivityTimeoutMinutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.inactivityTimeoutMinutes"></a>

```typescript
public readonly inactivityTimeoutMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.repositories"></a>

```typescript
public readonly repositories: IResolvable | CodecatalystDevEnvironmentRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#repositories CodecatalystDevEnvironment#repositories}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CodecatalystDevEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#timeouts CodecatalystDevEnvironment#timeouts}

---

### CodecatalystDevEnvironmentIdes <a name="CodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

const codecatalystDevEnvironmentIdes: codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}.

---

### CodecatalystDevEnvironmentPersistentStorage <a name="CodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

const codecatalystDevEnvironmentPersistentStorage: codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}.

---

### CodecatalystDevEnvironmentRepositories <a name="CodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

const codecatalystDevEnvironmentRepositories: codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.branchName">branchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}.

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}.

---

### CodecatalystDevEnvironmentTimeouts <a name="CodecatalystDevEnvironmentTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

const codecatalystDevEnvironmentTimeouts: codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodecatalystDevEnvironmentIdesOutputReference <a name="CodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

new codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodecatalystDevEnvironmentIdes;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---


### CodecatalystDevEnvironmentPersistentStorageOutputReference <a name="CodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

new codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodecatalystDevEnvironmentPersistentStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---


### CodecatalystDevEnvironmentRepositoriesList <a name="CodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

new codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get"></a>

```typescript
public get(index: number): CodecatalystDevEnvironmentRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodecatalystDevEnvironmentRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>[]

---


### CodecatalystDevEnvironmentRepositoriesOutputReference <a name="CodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

new codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resetBranchName">resetBranchName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchName` <a name="resetBranchName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resetBranchName"></a>

```typescript
public resetBranchName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodecatalystDevEnvironmentRepositories;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>

---


### CodecatalystDevEnvironmentTimeoutsOutputReference <a name="CodecatalystDevEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { codecatalystDevEnvironment } from '@cdktf/provider-aws'

new codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodecatalystDevEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

---



