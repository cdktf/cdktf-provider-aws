# `lexv2ModelsSlotType` Submodule <a name="`lexv2ModelsSlotType` Submodule" id="@cdktf/provider-aws.lexv2ModelsSlotType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsSlotType <a name="Lexv2ModelsSlotType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotType(scope: Construct, id: string, config: Lexv2ModelsSlotTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig">Lexv2ModelsSlotTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig">Lexv2ModelsSlotTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting">putCompositeSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting">putExternalSourceSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues">putSlotTypeValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting">putValueSelectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetCompositeSlotTypeSetting">resetCompositeSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetExternalSourceSetting">resetExternalSourceSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetParentSlotTypeSignature">resetParentSlotTypeSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetSlotTypeValues">resetSlotTypeValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetValueSelectionSetting">resetValueSelectionSetting</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompositeSlotTypeSetting` <a name="putCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting"></a>

```typescript
public putCompositeSlotTypeSetting(value: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]

---

##### `putExternalSourceSetting` <a name="putExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting"></a>

```typescript
public putExternalSourceSetting(value: IResolvable | Lexv2ModelsSlotTypeExternalSourceSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]

---

##### `putSlotTypeValues` <a name="putSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues"></a>

```typescript
public putSlotTypeValues(value: IResolvable | Lexv2ModelsSlotTypeSlotTypeValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts"></a>

```typescript
public putTimeouts(value: Lexv2ModelsSlotTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---

##### `putValueSelectionSetting` <a name="putValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting"></a>

```typescript
public putValueSelectionSetting(value: IResolvable | Lexv2ModelsSlotTypeValueSelectionSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]

---

##### `resetCompositeSlotTypeSetting` <a name="resetCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetCompositeSlotTypeSetting"></a>

```typescript
public resetCompositeSlotTypeSetting(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalSourceSetting` <a name="resetExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetExternalSourceSetting"></a>

```typescript
public resetExternalSourceSetting(): void
```

##### `resetParentSlotTypeSignature` <a name="resetParentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetParentSlotTypeSignature"></a>

```typescript
public resetParentSlotTypeSignature(): void
```

##### `resetSlotTypeValues` <a name="resetSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetSlotTypeValues"></a>

```typescript
public resetSlotTypeValues(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSelectionSetting` <a name="resetValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetValueSelectionSetting"></a>

```typescript
public resetValueSelectionSetting(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Lexv2ModelsSlotType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Lexv2ModelsSlotType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsSlotType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSetting">compositeSlotTypeSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSetting">externalSourceSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList">Lexv2ModelsSlotTypeExternalSourceSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeId">slotTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValues">slotTypeValues</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList">Lexv2ModelsSlotTypeSlotTypeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference">Lexv2ModelsSlotTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSetting">valueSelectionSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botIdInput">botIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersionInput">botVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSettingInput">compositeSlotTypeSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSettingInput">externalSourceSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeIdInput">localeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignatureInput">parentSlotTypeSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValuesInput">slotTypeValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSettingInput">valueSelectionSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botId">botId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersion">botVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeId">localeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignature">parentSlotTypeSignature</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compositeSlotTypeSetting`<sup>Required</sup> <a name="compositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSetting"></a>

```typescript
public readonly compositeSlotTypeSetting: Lexv2ModelsSlotTypeCompositeSlotTypeSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingList</a>

---

##### `externalSourceSetting`<sup>Required</sup> <a name="externalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSetting"></a>

```typescript
public readonly externalSourceSetting: Lexv2ModelsSlotTypeExternalSourceSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList">Lexv2ModelsSlotTypeExternalSourceSettingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `slotTypeId`<sup>Required</sup> <a name="slotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeId"></a>

```typescript
public readonly slotTypeId: string;
```

- *Type:* string

---

##### `slotTypeValues`<sup>Required</sup> <a name="slotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValues"></a>

```typescript
public readonly slotTypeValues: Lexv2ModelsSlotTypeSlotTypeValuesList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList">Lexv2ModelsSlotTypeSlotTypeValuesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeouts"></a>

```typescript
public readonly timeouts: Lexv2ModelsSlotTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference">Lexv2ModelsSlotTypeTimeoutsOutputReference</a>

---

##### `valueSelectionSetting`<sup>Required</sup> <a name="valueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSetting"></a>

```typescript
public readonly valueSelectionSetting: Lexv2ModelsSlotTypeValueSelectionSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingList</a>

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botIdInput"></a>

```typescript
public readonly botIdInput: string;
```

- *Type:* string

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersionInput"></a>

```typescript
public readonly botVersionInput: string;
```

- *Type:* string

---

##### `compositeSlotTypeSettingInput`<sup>Optional</sup> <a name="compositeSlotTypeSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSettingInput"></a>

```typescript
public readonly compositeSlotTypeSettingInput: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalSourceSettingInput`<sup>Optional</sup> <a name="externalSourceSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSettingInput"></a>

```typescript
public readonly externalSourceSettingInput: IResolvable | Lexv2ModelsSlotTypeExternalSourceSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeIdInput"></a>

```typescript
public readonly localeIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentSlotTypeSignatureInput`<sup>Optional</sup> <a name="parentSlotTypeSignatureInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignatureInput"></a>

```typescript
public readonly parentSlotTypeSignatureInput: string;
```

- *Type:* string

---

##### `slotTypeValuesInput`<sup>Optional</sup> <a name="slotTypeValuesInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValuesInput"></a>

```typescript
public readonly slotTypeValuesInput: IResolvable | Lexv2ModelsSlotTypeSlotTypeValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Lexv2ModelsSlotTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---

##### `valueSelectionSettingInput`<sup>Optional</sup> <a name="valueSelectionSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSettingInput"></a>

```typescript
public readonly valueSelectionSettingInput: IResolvable | Lexv2ModelsSlotTypeValueSelectionSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentSlotTypeSignature`<sup>Required</sup> <a name="parentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignature"></a>

```typescript
public readonly parentSlotTypeSignature: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsSlotTypeCompositeSlotTypeSetting <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeCompositeSlotTypeSetting: lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.property.subSlots">subSlots</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]</code> | sub_slots block. |

---

##### `subSlots`<sup>Optional</sup> <a name="subSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.property.subSlots"></a>

```typescript
public readonly subSlots: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]

sub_slots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#sub_slots Lexv2ModelsSlotType#sub_slots}

---

### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots: lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.slotTypeId">slotTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `slotTypeId`<sup>Required</sup> <a name="slotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.slotTypeId"></a>

```typescript
public readonly slotTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}.

---

### Lexv2ModelsSlotTypeConfig <a name="Lexv2ModelsSlotTypeConfig" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeConfig: lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botId">botId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botVersion">botVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.localeId">localeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.compositeSlotTypeSetting">compositeSlotTypeSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]</code> | composite_slot_type_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.externalSourceSetting">externalSourceSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]</code> | external_source_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.parentSlotTypeSignature">parentSlotTypeSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.slotTypeValues">slotTypeValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]</code> | slot_type_values block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.valueSelectionSetting">valueSelectionSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]</code> | value_selection_setting block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `compositeSlotTypeSetting`<sup>Optional</sup> <a name="compositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.compositeSlotTypeSetting"></a>

```typescript
public readonly compositeSlotTypeSetting: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]

composite_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#composite_slot_type_setting Lexv2ModelsSlotType#composite_slot_type_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}.

---

##### `externalSourceSetting`<sup>Optional</sup> <a name="externalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.externalSourceSetting"></a>

```typescript
public readonly externalSourceSetting: IResolvable | Lexv2ModelsSlotTypeExternalSourceSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]

external_source_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#external_source_setting Lexv2ModelsSlotType#external_source_setting}

---

##### `parentSlotTypeSignature`<sup>Optional</sup> <a name="parentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.parentSlotTypeSignature"></a>

```typescript
public readonly parentSlotTypeSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}.

---

##### `slotTypeValues`<sup>Optional</sup> <a name="slotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.slotTypeValues"></a>

```typescript
public readonly slotTypeValues: IResolvable | Lexv2ModelsSlotTypeSlotTypeValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]

slot_type_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#slot_type_values Lexv2ModelsSlotType#slot_type_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Lexv2ModelsSlotTypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#timeouts Lexv2ModelsSlotType#timeouts}

---

##### `valueSelectionSetting`<sup>Optional</sup> <a name="valueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.valueSelectionSetting"></a>

```typescript
public readonly valueSelectionSetting: IResolvable | Lexv2ModelsSlotTypeValueSelectionSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]

value_selection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#value_selection_setting Lexv2ModelsSlotType#value_selection_setting}

---

### Lexv2ModelsSlotTypeExternalSourceSetting <a name="Lexv2ModelsSlotTypeExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeExternalSourceSetting: lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.property.grammarSlotTypeSetting">grammarSlotTypeSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]</code> | grammar_slot_type_setting block. |

---

##### `grammarSlotTypeSetting`<sup>Optional</sup> <a name="grammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.property.grammarSlotTypeSetting"></a>

```typescript
public readonly grammarSlotTypeSetting: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]

grammar_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#grammar_slot_type_setting Lexv2ModelsSlotType#grammar_slot_type_setting}

---

### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting: lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]</code> | source block. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.property.source"></a>

```typescript
public readonly source: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#source Lexv2ModelsSlotType#source}

---

### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource: lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}.

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}.

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}.

---

### Lexv2ModelsSlotTypeSlotTypeValues <a name="Lexv2ModelsSlotTypeSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeSlotTypeValues: lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.sampleValue">sampleValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]</code> | sample_value block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.synonyms">synonyms</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]</code> | synonyms block. |

---

##### `sampleValue`<sup>Optional</sup> <a name="sampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.sampleValue"></a>

```typescript
public readonly sampleValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]

sample_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#sample_value Lexv2ModelsSlotType#sample_value}

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.synonyms"></a>

```typescript
public readonly synonyms: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]

synonyms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#synonyms Lexv2ModelsSlotType#synonyms}

---

### Lexv2ModelsSlotTypeSlotTypeValuesSampleValue <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeSlotTypeValuesSampleValue: lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}.

---

### Lexv2ModelsSlotTypeSlotTypeValuesSynonyms <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeSlotTypeValuesSynonyms: lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}.

---

### Lexv2ModelsSlotTypeTimeouts <a name="Lexv2ModelsSlotTypeTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeTimeouts: lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#create Lexv2ModelsSlotType#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#delete Lexv2ModelsSlotType#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#update Lexv2ModelsSlotType#update}

---

### Lexv2ModelsSlotTypeValueSelectionSetting <a name="Lexv2ModelsSlotTypeValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeValueSelectionSetting: lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.resolutionStrategy">resolutionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.advancedRecognitionSetting">advancedRecognitionSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]</code> | advanced_recognition_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.regexFilter">regexFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]</code> | regex_filter block. |

---

##### `resolutionStrategy`<sup>Required</sup> <a name="resolutionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.resolutionStrategy"></a>

```typescript
public readonly resolutionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}.

---

##### `advancedRecognitionSetting`<sup>Optional</sup> <a name="advancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.advancedRecognitionSetting"></a>

```typescript
public readonly advancedRecognitionSetting: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]

advanced_recognition_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#advanced_recognition_setting Lexv2ModelsSlotType#advanced_recognition_setting}

---

##### `regexFilter`<sup>Optional</sup> <a name="regexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.regexFilter"></a>

```typescript
public readonly regexFilter: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]

regex_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#regex_filter Lexv2ModelsSlotType#regex_filter}

---

### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting: lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.property.audioRecognitionStrategy">audioRecognitionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}. |

---

##### `audioRecognitionStrategy`<sup>Optional</sup> <a name="audioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.property.audioRecognitionStrategy"></a>

```typescript
public readonly audioRecognitionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}.

---

### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

const lexv2ModelsSlotTypeValueSelectionSettingRegexFilter: lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsSlotTypeCompositeSlotTypeSettingList <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>[]

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots">putSubSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resetSubSlots">resetSubSlots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubSlots` <a name="putSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots"></a>

```typescript
public putSubSlots(value: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]

---

##### `resetSubSlots` <a name="resetSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resetSubSlots"></a>

```typescript
public resetSubSlots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlots">subSlots</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlotsInput">subSlotsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subSlots`<sup>Required</sup> <a name="subSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlots"></a>

```typescript
public readonly subSlots: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList</a>

---

##### `subSlotsInput`<sup>Optional</sup> <a name="subSlotsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlotsInput"></a>

```typescript
public readonly subSlotsInput: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>[]

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeIdInput">slotTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeId">slotTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `slotTypeIdInput`<sup>Optional</sup> <a name="slotTypeIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeIdInput"></a>

```typescript
public readonly slotTypeIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `slotTypeId`<sup>Required</sup> <a name="slotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeId"></a>

```typescript
public readonly slotTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource"></a>

```typescript
public putSource(value: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]

---

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.source"></a>

```typescript
public readonly source: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>[]

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKeyInput">s3ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3ObjectKeyInput`<sup>Optional</sup> <a name="s3ObjectKeyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKeyInput"></a>

```typescript
public readonly s3ObjectKeyInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>

---


### Lexv2ModelsSlotTypeExternalSourceSettingList <a name="Lexv2ModelsSlotTypeExternalSourceSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeExternalSourceSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>[]

---


### Lexv2ModelsSlotTypeExternalSourceSettingOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting">putGrammarSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resetGrammarSlotTypeSetting">resetGrammarSlotTypeSetting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrammarSlotTypeSetting` <a name="putGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting"></a>

```typescript
public putGrammarSlotTypeSetting(value: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]

---

##### `resetGrammarSlotTypeSetting` <a name="resetGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resetGrammarSlotTypeSetting"></a>

```typescript
public resetGrammarSlotTypeSetting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSetting">grammarSlotTypeSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSettingInput">grammarSlotTypeSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grammarSlotTypeSetting`<sup>Required</sup> <a name="grammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSetting"></a>

```typescript
public readonly grammarSlotTypeSetting: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList</a>

---

##### `grammarSlotTypeSettingInput`<sup>Optional</sup> <a name="grammarSlotTypeSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSettingInput"></a>

```typescript
public readonly grammarSlotTypeSettingInput: IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeExternalSourceSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>

---


### Lexv2ModelsSlotTypeSlotTypeValuesList <a name="Lexv2ModelsSlotTypeSlotTypeValuesList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>[]

---


### Lexv2ModelsSlotTypeSlotTypeValuesOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue">putSampleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms">putSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSampleValue">resetSampleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSampleValue` <a name="putSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue"></a>

```typescript
public putSampleValue(value: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]

---

##### `putSynonyms` <a name="putSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms"></a>

```typescript
public putSynonyms(value: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]

---

##### `resetSampleValue` <a name="resetSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSampleValue"></a>

```typescript
public resetSampleValue(): void
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValue">sampleValue</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList">Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonyms">synonyms</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList">Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValueInput">sampleValueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sampleValue`<sup>Required</sup> <a name="sampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValue"></a>

```typescript
public readonly sampleValue: Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList">Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList</a>

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList">Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList</a>

---

##### `sampleValueInput`<sup>Optional</sup> <a name="sampleValueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValueInput"></a>

```typescript
public readonly sampleValueInput: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValues;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>

---


### Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>[]

---


### Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSampleValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>

---


### Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>[]

---


### Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSynonyms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>

---


### Lexv2ModelsSlotTypeTimeoutsOutputReference <a name="Lexv2ModelsSlotTypeTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---


### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]

---


### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resetAudioRecognitionStrategy">resetAudioRecognitionStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioRecognitionStrategy` <a name="resetAudioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resetAudioRecognitionStrategy"></a>

```typescript
public resetAudioRecognitionStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategyInput">audioRecognitionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategy">audioRecognitionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioRecognitionStrategyInput`<sup>Optional</sup> <a name="audioRecognitionStrategyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategyInput"></a>

```typescript
public readonly audioRecognitionStrategyInput: string;
```

- *Type:* string

---

##### `audioRecognitionStrategy`<sup>Required</sup> <a name="audioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategy"></a>

```typescript
public readonly audioRecognitionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>

---


### Lexv2ModelsSlotTypeValueSelectionSettingList <a name="Lexv2ModelsSlotTypeValueSelectionSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeValueSelectionSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>[]

---


### Lexv2ModelsSlotTypeValueSelectionSettingOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting">putAdvancedRecognitionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter">putRegexFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetAdvancedRecognitionSetting">resetAdvancedRecognitionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetRegexFilter">resetRegexFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedRecognitionSetting` <a name="putAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting"></a>

```typescript
public putAdvancedRecognitionSetting(value: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]

---

##### `putRegexFilter` <a name="putRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter"></a>

```typescript
public putRegexFilter(value: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]

---

##### `resetAdvancedRecognitionSetting` <a name="resetAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetAdvancedRecognitionSetting"></a>

```typescript
public resetAdvancedRecognitionSetting(): void
```

##### `resetRegexFilter` <a name="resetRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetRegexFilter"></a>

```typescript
public resetRegexFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSetting">advancedRecognitionSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilter">regexFilter</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSettingInput">advancedRecognitionSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilterInput">regexFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategyInput">resolutionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategy">resolutionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedRecognitionSetting`<sup>Required</sup> <a name="advancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSetting"></a>

```typescript
public readonly advancedRecognitionSetting: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList</a>

---

##### `regexFilter`<sup>Required</sup> <a name="regexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilter"></a>

```typescript
public readonly regexFilter: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList</a>

---

##### `advancedRecognitionSettingInput`<sup>Optional</sup> <a name="advancedRecognitionSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSettingInput"></a>

```typescript
public readonly advancedRecognitionSettingInput: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>[]

---

##### `regexFilterInput`<sup>Optional</sup> <a name="regexFilterInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilterInput"></a>

```typescript
public readonly regexFilterInput: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]

---

##### `resolutionStrategyInput`<sup>Optional</sup> <a name="resolutionStrategyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategyInput"></a>

```typescript
public readonly resolutionStrategyInput: string;
```

- *Type:* string

---

##### `resolutionStrategy`<sup>Required</sup> <a name="resolutionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategy"></a>

```typescript
public readonly resolutionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeValueSelectionSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>

---


### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get"></a>

```typescript
public get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>[]

---


### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer"></a>

```typescript
import { lexv2ModelsSlotType } from '@cdktf/provider-aws'

new lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>

---



