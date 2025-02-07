# `lexv2ModelsBotVersion` Submodule <a name="`lexv2ModelsBotVersion` Submodule" id="@cdktf/provider-aws.lexv2ModelsBotVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBotVersion <a name="Lexv2ModelsBotVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version aws_lexv2models_bot_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

new lexv2ModelsBotVersion.Lexv2ModelsBotVersion(scope: Construct, id: string, config: Lexv2ModelsBotVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig">Lexv2ModelsBotVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig">Lexv2ModelsBotVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putLocaleSpecification">putLocaleSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetBotVersion">resetBotVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocaleSpecification` <a name="putLocaleSpecification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putLocaleSpecification"></a>

```typescript
public putLocaleSpecification(value: IResolvable | {[ key: string ]: Lexv2ModelsBotVersionLocaleSpecification}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putLocaleSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: Lexv2ModelsBotVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>

---

##### `resetBotVersion` <a name="resetBotVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetBotVersion"></a>

```typescript
public resetBotVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsBotVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Lexv2ModelsBotVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Lexv2ModelsBotVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Lexv2ModelsBotVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBotVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecification">localeSpecification</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap">Lexv2ModelsBotVersionLocaleSpecificationMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference">Lexv2ModelsBotVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botIdInput">botIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersionInput">botVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecificationInput">localeSpecificationInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botId">botId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersion">botVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localeSpecification`<sup>Required</sup> <a name="localeSpecification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecification"></a>

```typescript
public readonly localeSpecification: Lexv2ModelsBotVersionLocaleSpecificationMap;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap">Lexv2ModelsBotVersionLocaleSpecificationMap</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeouts"></a>

```typescript
public readonly timeouts: Lexv2ModelsBotVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference">Lexv2ModelsBotVersionTimeoutsOutputReference</a>

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botIdInput"></a>

```typescript
public readonly botIdInput: string;
```

- *Type:* string

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersionInput"></a>

```typescript
public readonly botVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `localeSpecificationInput`<sup>Optional</sup> <a name="localeSpecificationInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecificationInput"></a>

```typescript
public readonly localeSpecificationInput: IResolvable | {[ key: string ]: Lexv2ModelsBotVersionLocaleSpecification};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Lexv2ModelsBotVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotVersionConfig <a name="Lexv2ModelsBotVersionConfig" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

const lexv2ModelsBotVersionConfig: lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botId">botId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.localeSpecification">localeSpecification</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botVersion">botVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}.

---

##### `localeSpecification`<sup>Required</sup> <a name="localeSpecification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.localeSpecification"></a>

```typescript
public readonly localeSpecification: IResolvable | {[ key: string ]: Lexv2ModelsBotVersionLocaleSpecification};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}.

---

##### `botVersion`<sup>Optional</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Lexv2ModelsBotVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#timeouts Lexv2ModelsBotVersion#timeouts}

---

### Lexv2ModelsBotVersionLocaleSpecification <a name="Lexv2ModelsBotVersionLocaleSpecification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

const lexv2ModelsBotVersionLocaleSpecification: lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification.property.sourceBotVersion">sourceBotVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#source_bot_version Lexv2ModelsBotVersion#source_bot_version}. |

---

##### `sourceBotVersion`<sup>Required</sup> <a name="sourceBotVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification.property.sourceBotVersion"></a>

```typescript
public readonly sourceBotVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#source_bot_version Lexv2ModelsBotVersion#source_bot_version}.

---

### Lexv2ModelsBotVersionTimeouts <a name="Lexv2ModelsBotVersionTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

const lexv2ModelsBotVersionTimeouts: lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#create Lexv2ModelsBotVersion#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lexv2models_bot_version#delete Lexv2ModelsBotVersion#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotVersionLocaleSpecificationMap <a name="Lexv2ModelsBotVersionLocaleSpecificationMap" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

new lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.get"></a>

```typescript
public get(key: string): Lexv2ModelsBotVersionLocaleSpecificationOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: Lexv2ModelsBotVersionLocaleSpecification};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>}

---


### Lexv2ModelsBotVersionLocaleSpecificationOutputReference <a name="Lexv2ModelsBotVersionLocaleSpecificationOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

new lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersionInput">sourceBotVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersion">sourceBotVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceBotVersionInput`<sup>Optional</sup> <a name="sourceBotVersionInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersionInput"></a>

```typescript
public readonly sourceBotVersionInput: string;
```

- *Type:* string

---

##### `sourceBotVersion`<sup>Required</sup> <a name="sourceBotVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersion"></a>

```typescript
public readonly sourceBotVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsBotVersionLocaleSpecification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>

---


### Lexv2ModelsBotVersionTimeoutsOutputReference <a name="Lexv2ModelsBotVersionTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsBotVersion } from '@cdktf/provider-aws'

new lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsBotVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>

---



