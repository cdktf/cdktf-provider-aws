# `lexv2ModelsBotLocale` Submodule <a name="`lexv2ModelsBotLocale` Submodule" id="@cdktf/provider-aws.lexv2ModelsBotLocale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBotLocale <a name="Lexv2ModelsBotLocale" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

new lexv2ModelsBotLocale.Lexv2ModelsBotLocale(scope: Construct, id: string, config: Lexv2ModelsBotLocaleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig">Lexv2ModelsBotLocaleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig">Lexv2ModelsBotLocaleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings">putVoiceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings">resetVoiceSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts"></a>

```typescript
public putTimeouts(value: Lexv2ModelsBotLocaleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---

##### `putVoiceSettings` <a name="putVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings"></a>

```typescript
public putVoiceSettings(value: IResolvable | Lexv2ModelsBotLocaleVoiceSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVoiceSettings` <a name="resetVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings"></a>

```typescript
public resetVoiceSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Lexv2ModelsBotLocale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Lexv2ModelsBotLocale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBotLocale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings">voiceSettings</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput">botIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput">botVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput">localeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput">nLuIntentConfidenceThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput">voiceSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId">botId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion">botVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId">localeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold">nLuIntentConfidenceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts"></a>

```typescript
public readonly timeouts: Lexv2ModelsBotLocaleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a>

---

##### `voiceSettings`<sup>Required</sup> <a name="voiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings"></a>

```typescript
public readonly voiceSettings: Lexv2ModelsBotLocaleVoiceSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a>

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput"></a>

```typescript
public readonly botIdInput: string;
```

- *Type:* string

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput"></a>

```typescript
public readonly botVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput"></a>

```typescript
public readonly localeIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nLuIntentConfidenceThresholdInput`<sup>Optional</sup> <a name="nLuIntentConfidenceThresholdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput"></a>

```typescript
public readonly nLuIntentConfidenceThresholdInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Lexv2ModelsBotLocaleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---

##### `voiceSettingsInput`<sup>Optional</sup> <a name="voiceSettingsInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput"></a>

```typescript
public readonly voiceSettingsInput: IResolvable | Lexv2ModelsBotLocaleVoiceSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nLuIntentConfidenceThreshold`<sup>Required</sup> <a name="nLuIntentConfidenceThreshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold"></a>

```typescript
public readonly nLuIntentConfidenceThreshold: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotLocaleConfig <a name="Lexv2ModelsBotLocaleConfig" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

const lexv2ModelsBotLocaleConfig: lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId">botId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion">botVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId">localeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold">nLuIntentConfidenceThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings">voiceSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]</code> | voice_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}.

---

##### `nLuIntentConfidenceThreshold`<sup>Required</sup> <a name="nLuIntentConfidenceThreshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold"></a>

```typescript
public readonly nLuIntentConfidenceThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#region Lexv2ModelsBotLocale#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Lexv2ModelsBotLocaleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}

---

##### `voiceSettings`<sup>Optional</sup> <a name="voiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings"></a>

```typescript
public readonly voiceSettings: IResolvable | Lexv2ModelsBotLocaleVoiceSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]

voice_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}

---

### Lexv2ModelsBotLocaleTimeouts <a name="Lexv2ModelsBotLocaleTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

const lexv2ModelsBotLocaleTimeouts: lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}

---

### Lexv2ModelsBotLocaleVoiceSettings <a name="Lexv2ModelsBotLocaleVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

const lexv2ModelsBotLocaleVoiceSettings: lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId">voiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}. |

---

##### `voiceId`<sup>Required</sup> <a name="voiceId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId"></a>

```typescript
public readonly voiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotLocaleTimeoutsOutputReference <a name="Lexv2ModelsBotLocaleTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

new lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsBotLocaleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---


### Lexv2ModelsBotLocaleVoiceSettingsList <a name="Lexv2ModelsBotLocaleVoiceSettingsList" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

new lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get"></a>

```typescript
public get(index: number): Lexv2ModelsBotLocaleVoiceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsBotLocaleVoiceSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>[]

---


### Lexv2ModelsBotLocaleVoiceSettingsOutputReference <a name="Lexv2ModelsBotLocaleVoiceSettingsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsBotLocale } from '@cdktf/provider-aws'

new lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine">resetEngine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine"></a>

```typescript
public resetEngine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput">voiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId">voiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `voiceIdInput`<sup>Optional</sup> <a name="voiceIdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput"></a>

```typescript
public readonly voiceIdInput: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `voiceId`<sup>Required</sup> <a name="voiceId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId"></a>

```typescript
public readonly voiceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsBotLocaleVoiceSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>

---



