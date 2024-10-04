# `pinpointsmsvoicev2PhoneNumber` Submodule <a name="`pinpointsmsvoicev2PhoneNumber` Submodule" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2PhoneNumber <a name="Pinpointsmsvoicev2PhoneNumber" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

new pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber(scope: Construct, id: string, config: Pinpointsmsvoicev2PhoneNumberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig">Pinpointsmsvoicev2PhoneNumberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig">Pinpointsmsvoicev2PhoneNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegistrationId">resetRegistrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelArn">resetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelEnabled">resetTwoWayChannelEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts"></a>

```typescript
public putTimeouts(value: Pinpointsmsvoicev2PhoneNumberTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOptOutListName"></a>

```typescript
public resetOptOutListName(): void
```

##### `resetRegistrationId` <a name="resetRegistrationId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegistrationId"></a>

```typescript
public resetRegistrationId(): void
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```typescript
public resetSelfManagedOptOutsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTwoWayChannelArn` <a name="resetTwoWayChannelArn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelArn"></a>

```typescript
public resetTwoWayChannelArn(): void
```

##### `resetTwoWayChannelEnabled` <a name="resetTwoWayChannelEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelEnabled"></a>

```typescript
public resetTwoWayChannelEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2PhoneNumber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2PhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2PhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.monthlyLeasingPrice">monthlyLeasingPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference">Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilitiesInput">numberCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberTypeInput">numberTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListNameInput">optOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationIdInput">registrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArnInput">twoWayChannelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabledInput">twoWayChannelEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilities">numberCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberType">numberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListName">optOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationId">registrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabled">twoWayChannelEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monthlyLeasingPrice`<sup>Required</sup> <a name="monthlyLeasingPrice" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.monthlyLeasingPrice"></a>

```typescript
public readonly monthlyLeasingPrice: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeouts"></a>

```typescript
public readonly timeouts: Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference">Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCodeInput"></a>

```typescript
public readonly isoCountryCodeInput: string;
```

- *Type:* string

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `numberCapabilitiesInput`<sup>Optional</sup> <a name="numberCapabilitiesInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilitiesInput"></a>

```typescript
public readonly numberCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `numberTypeInput`<sup>Optional</sup> <a name="numberTypeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberTypeInput"></a>

```typescript
public readonly numberTypeInput: string;
```

- *Type:* string

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListNameInput"></a>

```typescript
public readonly optOutListNameInput: string;
```

- *Type:* string

---

##### `registrationIdInput`<sup>Optional</sup> <a name="registrationIdInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationIdInput"></a>

```typescript
public readonly registrationIdInput: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```typescript
public readonly selfManagedOptOutsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Pinpointsmsvoicev2PhoneNumberTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

---

##### `twoWayChannelArnInput`<sup>Optional</sup> <a name="twoWayChannelArnInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArnInput"></a>

```typescript
public readonly twoWayChannelArnInput: string;
```

- *Type:* string

---

##### `twoWayChannelEnabledInput`<sup>Optional</sup> <a name="twoWayChannelEnabledInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabledInput"></a>

```typescript
public readonly twoWayChannelEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilities"></a>

```typescript
public readonly numberCapabilities: string[];
```

- *Type:* string[]

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberType"></a>

```typescript
public readonly numberType: string;
```

- *Type:* string

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `twoWayChannelArn`<sup>Required</sup> <a name="twoWayChannelArn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

---

##### `twoWayChannelEnabled`<sup>Required</sup> <a name="twoWayChannelEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabled"></a>

```typescript
public readonly twoWayChannelEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PhoneNumberConfig <a name="Pinpointsmsvoicev2PhoneNumberConfig" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.Initializer"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

const pinpointsmsvoicev2PhoneNumberConfig: pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.messageType">messageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberCapabilities">numberCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberType">numberType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.optOutListName">optOutListName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.registrationId">registrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelEnabled">twoWayChannelEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}.

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}.

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberCapabilities"></a>

```typescript
public readonly numberCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}.

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberType"></a>

```typescript
public readonly numberType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}.

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}.

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}.

---

##### `registrationId`<sup>Optional</sup> <a name="registrationId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}.

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Pinpointsmsvoicev2PhoneNumberTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts Pinpointsmsvoicev2PhoneNumber#timeouts}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}.

---

##### `twoWayChannelEnabled`<sup>Optional</sup> <a name="twoWayChannelEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelEnabled"></a>

```typescript
public readonly twoWayChannelEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}.

---

### Pinpointsmsvoicev2PhoneNumberTimeouts <a name="Pinpointsmsvoicev2PhoneNumberTimeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.Initializer"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

const pinpointsmsvoicev2PhoneNumberTimeouts: pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#create Pinpointsmsvoicev2PhoneNumber#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#delete Pinpointsmsvoicev2PhoneNumber#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#update Pinpointsmsvoicev2PhoneNumber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference <a name="Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer"></a>

```typescript
import { pinpointsmsvoicev2PhoneNumber } from '@cdktf/provider-aws'

new pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Pinpointsmsvoicev2PhoneNumberTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

---



