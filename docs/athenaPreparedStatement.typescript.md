# `athenaPreparedStatement` Submodule <a name="`athenaPreparedStatement` Submodule" id="@cdktf/provider-aws.athenaPreparedStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaPreparedStatement <a name="AthenaPreparedStatement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement aws_athena_prepared_statement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

new athenaPreparedStatement.AthenaPreparedStatement(scope: Construct, id: string, config: AthenaPreparedStatementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig">AthenaPreparedStatementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig">AthenaPreparedStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.putTimeouts"></a>

```typescript
public putTimeouts(value: AthenaPreparedStatementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AthenaPreparedStatement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isConstruct"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

athenaPreparedStatement.AthenaPreparedStatement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AthenaPreparedStatement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AthenaPreparedStatement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AthenaPreparedStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AthenaPreparedStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference">AthenaPreparedStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput">queryStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroupInput">workgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement">queryStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroup">workgroup</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeouts"></a>

```typescript
public readonly timeouts: AthenaPreparedStatementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference">AthenaPreparedStatementTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryStatementInput`<sup>Optional</sup> <a name="queryStatementInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput"></a>

```typescript
public readonly queryStatementInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AthenaPreparedStatementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a>

---

##### `workgroupInput`<sup>Optional</sup> <a name="workgroupInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroupInput"></a>

```typescript
public readonly workgroupInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryStatement`<sup>Required</sup> <a name="queryStatement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement"></a>

```typescript
public readonly queryStatement: string;
```

- *Type:* string

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroup"></a>

```typescript
public readonly workgroup: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaPreparedStatementConfig <a name="AthenaPreparedStatementConfig" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.Initializer"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

const athenaPreparedStatementConfig: athenaPreparedStatement.AthenaPreparedStatementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#name AthenaPreparedStatement#name}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement">queryStatement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workgroup">workgroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#workgroup AthenaPreparedStatement#workgroup}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#id AthenaPreparedStatement#id}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#name AthenaPreparedStatement#name}.

---

##### `queryStatement`<sup>Required</sup> <a name="queryStatement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement"></a>

```typescript
public readonly queryStatement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}.

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workgroup"></a>

```typescript
public readonly workgroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#workgroup AthenaPreparedStatement#workgroup}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#id AthenaPreparedStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AthenaPreparedStatementTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#timeouts AthenaPreparedStatement#timeouts}

---

### AthenaPreparedStatementTimeouts <a name="AthenaPreparedStatementTimeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.Initializer"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

const athenaPreparedStatementTimeouts: athenaPreparedStatement.AthenaPreparedStatementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#create AthenaPreparedStatement#create}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#delete AthenaPreparedStatement#delete}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#update AthenaPreparedStatement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#create AthenaPreparedStatement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#delete AthenaPreparedStatement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/athena_prepared_statement#update AthenaPreparedStatement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaPreparedStatementTimeoutsOutputReference <a name="AthenaPreparedStatementTimeoutsOutputReference" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer"></a>

```typescript
import { athenaPreparedStatement } from '@cdktf/provider-aws'

new athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaPreparedStatementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a>

---



