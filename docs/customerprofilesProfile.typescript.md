# `customerprofilesProfile` Submodule <a name="`customerprofilesProfile` Submodule" id="@cdktf/provider-aws.customerprofilesProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesProfile <a name="CustomerprofilesProfile" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

new customerprofilesProfile.CustomerprofilesProfile(scope: Construct, id: string, config: CustomerprofilesProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig">CustomerprofilesProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig">CustomerprofilesProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress">putAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress">putBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress">putMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress">putShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber">resetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation">resetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress">resetBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate">resetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress">resetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName">resetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber">resetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString">resetGenderString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber">resetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress">resetMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber">resetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString">resetPartyTypeString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress">resetPersonalEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress">resetShippingAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddress` <a name="putAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress"></a>

```typescript
public putAddress(value: CustomerprofilesProfileAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `putBillingAddress` <a name="putBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress"></a>

```typescript
public putBillingAddress(value: CustomerprofilesProfileBillingAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `putMailingAddress` <a name="putMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress"></a>

```typescript
public putMailingAddress(value: CustomerprofilesProfileMailingAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `putShippingAddress` <a name="putShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress"></a>

```typescript
public putShippingAddress(value: CustomerprofilesProfileShippingAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `resetAccountNumber` <a name="resetAccountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber"></a>

```typescript
public resetAccountNumber(): void
```

##### `resetAdditionalInformation` <a name="resetAdditionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation"></a>

```typescript
public resetAdditionalInformation(): void
```

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetBillingAddress` <a name="resetBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress"></a>

```typescript
public resetBillingAddress(): void
```

##### `resetBirthDate` <a name="resetBirthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate"></a>

```typescript
public resetBirthDate(): void
```

##### `resetBusinessEmailAddress` <a name="resetBusinessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress"></a>

```typescript
public resetBusinessEmailAddress(): void
```

##### `resetBusinessName` <a name="resetBusinessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName"></a>

```typescript
public resetBusinessName(): void
```

##### `resetBusinessPhoneNumber` <a name="resetBusinessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber"></a>

```typescript
public resetBusinessPhoneNumber(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetGenderString` <a name="resetGenderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString"></a>

```typescript
public resetGenderString(): void
```

##### `resetHomePhoneNumber` <a name="resetHomePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber"></a>

```typescript
public resetHomePhoneNumber(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetMailingAddress` <a name="resetMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress"></a>

```typescript
public resetMailingAddress(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```

##### `resetMobilePhoneNumber` <a name="resetMobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber"></a>

```typescript
public resetMobilePhoneNumber(): void
```

##### `resetPartyTypeString` <a name="resetPartyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString"></a>

```typescript
public resetPartyTypeString(): void
```

##### `resetPersonalEmailAddress` <a name="resetPersonalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress"></a>

```typescript
public resetPersonalEmailAddress(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetShippingAddress` <a name="resetShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress"></a>

```typescript
public resetShippingAddress(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

customerprofilesProfile.CustomerprofilesProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

customerprofilesProfile.CustomerprofilesProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

customerprofilesProfile.CustomerprofilesProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress">billingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress">mailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput">accountNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput">additionalInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput">addressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput">billingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput">birthDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput">businessEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput">businessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput">businessPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput">genderStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput">homePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput">mailingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput">mobilePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput">partyTypeStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput">personalEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput">shippingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber">accountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation">additionalInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate">birthDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress">businessEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName">businessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber">businessPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString">genderString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber">homePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString">partyTypeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress">personalEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address"></a>

```typescript
public readonly address: CustomerprofilesProfileAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a>

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress"></a>

```typescript
public readonly billingAddress: CustomerprofilesProfileBillingAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a>

---

##### `mailingAddress`<sup>Required</sup> <a name="mailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress"></a>

```typescript
public readonly mailingAddress: CustomerprofilesProfileMailingAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a>

---

##### `shippingAddress`<sup>Required</sup> <a name="shippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress"></a>

```typescript
public readonly shippingAddress: CustomerprofilesProfileShippingAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a>

---

##### `accountNumberInput`<sup>Optional</sup> <a name="accountNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput"></a>

```typescript
public readonly accountNumberInput: string;
```

- *Type:* string

---

##### `additionalInformationInput`<sup>Optional</sup> <a name="additionalInformationInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput"></a>

```typescript
public readonly additionalInformationInput: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput"></a>

```typescript
public readonly addressInput: CustomerprofilesProfileAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `billingAddressInput`<sup>Optional</sup> <a name="billingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput"></a>

```typescript
public readonly billingAddressInput: CustomerprofilesProfileBillingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `birthDateInput`<sup>Optional</sup> <a name="birthDateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput"></a>

```typescript
public readonly birthDateInput: string;
```

- *Type:* string

---

##### `businessEmailAddressInput`<sup>Optional</sup> <a name="businessEmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput"></a>

```typescript
public readonly businessEmailAddressInput: string;
```

- *Type:* string

---

##### `businessNameInput`<sup>Optional</sup> <a name="businessNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput"></a>

```typescript
public readonly businessNameInput: string;
```

- *Type:* string

---

##### `businessPhoneNumberInput`<sup>Optional</sup> <a name="businessPhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput"></a>

```typescript
public readonly businessPhoneNumberInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `genderStringInput`<sup>Optional</sup> <a name="genderStringInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput"></a>

```typescript
public readonly genderStringInput: string;
```

- *Type:* string

---

##### `homePhoneNumberInput`<sup>Optional</sup> <a name="homePhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput"></a>

```typescript
public readonly homePhoneNumberInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `mailingAddressInput`<sup>Optional</sup> <a name="mailingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput"></a>

```typescript
public readonly mailingAddressInput: CustomerprofilesProfileMailingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `mobilePhoneNumberInput`<sup>Optional</sup> <a name="mobilePhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput"></a>

```typescript
public readonly mobilePhoneNumberInput: string;
```

- *Type:* string

---

##### `partyTypeStringInput`<sup>Optional</sup> <a name="partyTypeStringInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput"></a>

```typescript
public readonly partyTypeStringInput: string;
```

- *Type:* string

---

##### `personalEmailAddressInput`<sup>Optional</sup> <a name="personalEmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput"></a>

```typescript
public readonly personalEmailAddressInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `shippingAddressInput`<sup>Optional</sup> <a name="shippingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput"></a>

```typescript
public readonly shippingAddressInput: CustomerprofilesProfileShippingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber"></a>

```typescript
public readonly accountNumber: string;
```

- *Type:* string

---

##### `additionalInformation`<sup>Required</sup> <a name="additionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation"></a>

```typescript
public readonly additionalInformation: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `birthDate`<sup>Required</sup> <a name="birthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate"></a>

```typescript
public readonly birthDate: string;
```

- *Type:* string

---

##### `businessEmailAddress`<sup>Required</sup> <a name="businessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress"></a>

```typescript
public readonly businessEmailAddress: string;
```

- *Type:* string

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

---

##### `businessPhoneNumber`<sup>Required</sup> <a name="businessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber"></a>

```typescript
public readonly businessPhoneNumber: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `genderString`<sup>Required</sup> <a name="genderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString"></a>

```typescript
public readonly genderString: string;
```

- *Type:* string

---

##### `homePhoneNumber`<sup>Required</sup> <a name="homePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber"></a>

```typescript
public readonly homePhoneNumber: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `mobilePhoneNumber`<sup>Required</sup> <a name="mobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber"></a>

```typescript
public readonly mobilePhoneNumber: string;
```

- *Type:* string

---

##### `partyTypeString`<sup>Required</sup> <a name="partyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString"></a>

```typescript
public readonly partyTypeString: string;
```

- *Type:* string

---

##### `personalEmailAddress`<sup>Required</sup> <a name="personalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress"></a>

```typescript
public readonly personalEmailAddress: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesProfileAddress <a name="CustomerprofilesProfileAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

const customerprofilesProfileAddress: customerprofilesProfile.CustomerprofilesProfileAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1">address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2">address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3">address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4">address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county">county</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province">province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileBillingAddress <a name="CustomerprofilesProfileBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

const customerprofilesProfileBillingAddress: customerprofilesProfile.CustomerprofilesProfileBillingAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1">address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2">address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3">address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4">address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county">county</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province">province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileConfig <a name="CustomerprofilesProfileConfig" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

const customerprofilesProfileConfig: customerprofilesProfile.CustomerprofilesProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber">accountNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation">additionalInformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress">billingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate">birthDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress">businessEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName">businessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber">businessPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString">genderString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber">homePhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress">mailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName">middleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString">partyTypeString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress">personalEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `accountNumber`<sup>Optional</sup> <a name="accountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber"></a>

```typescript
public readonly accountNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `additionalInformation`<sup>Optional</sup> <a name="additionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation"></a>

```typescript
public readonly additionalInformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address"></a>

```typescript
public readonly address: CustomerprofilesProfileAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `billingAddress`<sup>Optional</sup> <a name="billingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress"></a>

```typescript
public readonly billingAddress: CustomerprofilesProfileBillingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `birthDate`<sup>Optional</sup> <a name="birthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate"></a>

```typescript
public readonly birthDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `businessEmailAddress`<sup>Optional</sup> <a name="businessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress"></a>

```typescript
public readonly businessEmailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `businessName`<sup>Optional</sup> <a name="businessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `businessPhoneNumber`<sup>Optional</sup> <a name="businessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber"></a>

```typescript
public readonly businessPhoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `genderString`<sup>Optional</sup> <a name="genderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString"></a>

```typescript
public readonly genderString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `homePhoneNumber`<sup>Optional</sup> <a name="homePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber"></a>

```typescript
public readonly homePhoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `mailingAddress`<sup>Optional</sup> <a name="mailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress"></a>

```typescript
public readonly mailingAddress: CustomerprofilesProfileMailingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `mobilePhoneNumber`<sup>Optional</sup> <a name="mobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber"></a>

```typescript
public readonly mobilePhoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `partyTypeString`<sup>Optional</sup> <a name="partyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString"></a>

```typescript
public readonly partyTypeString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `personalEmailAddress`<sup>Optional</sup> <a name="personalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress"></a>

```typescript
public readonly personalEmailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `shippingAddress`<sup>Optional</sup> <a name="shippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress"></a>

```typescript
public readonly shippingAddress: CustomerprofilesProfileShippingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

### CustomerprofilesProfileMailingAddress <a name="CustomerprofilesProfileMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

const customerprofilesProfileMailingAddress: customerprofilesProfile.CustomerprofilesProfileMailingAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1">address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2">address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3">address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4">address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county">county</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province">province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileShippingAddress <a name="CustomerprofilesProfileShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

const customerprofilesProfileShippingAddress: customerprofilesProfile.CustomerprofilesProfileShippingAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1">address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2">address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3">address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4">address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county">county</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province">province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesProfileAddressOutputReference <a name="CustomerprofilesProfileAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

new customerprofilesProfile.CustomerprofilesProfileAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1"></a>

```typescript
public resetAddress1(): void
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3"></a>

```typescript
public resetAddress3(): void
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4"></a>

```typescript
public resetAddress4(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input">address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input">address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3">address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4">address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input"></a>

```typescript
public readonly address3Input: string;
```

- *Type:* string

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input"></a>

```typescript
public readonly address4Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesProfileAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---


### CustomerprofilesProfileBillingAddressOutputReference <a name="CustomerprofilesProfileBillingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

new customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1"></a>

```typescript
public resetAddress1(): void
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3"></a>

```typescript
public resetAddress3(): void
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4"></a>

```typescript
public resetAddress4(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input">address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input">address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3">address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4">address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input"></a>

```typescript
public readonly address3Input: string;
```

- *Type:* string

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input"></a>

```typescript
public readonly address4Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesProfileBillingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---


### CustomerprofilesProfileMailingAddressOutputReference <a name="CustomerprofilesProfileMailingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

new customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1"></a>

```typescript
public resetAddress1(): void
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3"></a>

```typescript
public resetAddress3(): void
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4"></a>

```typescript
public resetAddress4(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input">address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input">address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3">address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4">address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input"></a>

```typescript
public readonly address3Input: string;
```

- *Type:* string

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input"></a>

```typescript
public readonly address4Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesProfileMailingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---


### CustomerprofilesProfileShippingAddressOutputReference <a name="CustomerprofilesProfileShippingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer"></a>

```typescript
import { customerprofilesProfile } from '@cdktf/provider-aws'

new customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1"></a>

```typescript
public resetAddress1(): void
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3"></a>

```typescript
public resetAddress3(): void
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4"></a>

```typescript
public resetAddress4(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input">address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input">address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3">address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4">address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input"></a>

```typescript
public readonly address3Input: string;
```

- *Type:* string

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input"></a>

```typescript
public readonly address4Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesProfileShippingAddress;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---



