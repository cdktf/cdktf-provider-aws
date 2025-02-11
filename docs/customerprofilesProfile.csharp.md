# `customerprofilesProfile` Submodule <a name="`customerprofilesProfile` Submodule" id="@cdktf/provider-aws.customerprofilesProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesProfile <a name="CustomerprofilesProfile" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile aws_customerprofiles_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfile(Construct Scope, string Id, CustomerprofilesProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig">CustomerprofilesProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig">CustomerprofilesProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress">PutAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress">PutBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress">PutMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress">PutShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber">ResetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation">ResetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress">ResetBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate">ResetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress">ResetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName">ResetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber">ResetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString">ResetGenderString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber">ResetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress">ResetMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber">ResetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString">ResetPartyTypeString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress">ResetPersonalEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress">ResetShippingAddress</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddress` <a name="PutAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress"></a>

```csharp
private void PutAddress(CustomerprofilesProfileAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `PutBillingAddress` <a name="PutBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress"></a>

```csharp
private void PutBillingAddress(CustomerprofilesProfileBillingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `PutMailingAddress` <a name="PutMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress"></a>

```csharp
private void PutMailingAddress(CustomerprofilesProfileMailingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `PutShippingAddress` <a name="PutShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress"></a>

```csharp
private void PutShippingAddress(CustomerprofilesProfileShippingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `ResetAccountNumber` <a name="ResetAccountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber"></a>

```csharp
private void ResetAccountNumber()
```

##### `ResetAdditionalInformation` <a name="ResetAdditionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation"></a>

```csharp
private void ResetAdditionalInformation()
```

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetBillingAddress` <a name="ResetBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress"></a>

```csharp
private void ResetBillingAddress()
```

##### `ResetBirthDate` <a name="ResetBirthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate"></a>

```csharp
private void ResetBirthDate()
```

##### `ResetBusinessEmailAddress` <a name="ResetBusinessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress"></a>

```csharp
private void ResetBusinessEmailAddress()
```

##### `ResetBusinessName` <a name="ResetBusinessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName"></a>

```csharp
private void ResetBusinessName()
```

##### `ResetBusinessPhoneNumber` <a name="ResetBusinessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber"></a>

```csharp
private void ResetBusinessPhoneNumber()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetGenderString` <a name="ResetGenderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString"></a>

```csharp
private void ResetGenderString()
```

##### `ResetHomePhoneNumber` <a name="ResetHomePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber"></a>

```csharp
private void ResetHomePhoneNumber()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetMailingAddress` <a name="ResetMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress"></a>

```csharp
private void ResetMailingAddress()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```

##### `ResetMobilePhoneNumber` <a name="ResetMobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber"></a>

```csharp
private void ResetMobilePhoneNumber()
```

##### `ResetPartyTypeString` <a name="ResetPartyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString"></a>

```csharp
private void ResetPartyTypeString()
```

##### `ResetPersonalEmailAddress` <a name="ResetPersonalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress"></a>

```csharp
private void ResetPersonalEmailAddress()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetShippingAddress` <a name="ResetShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress"></a>

```csharp
private void ResetShippingAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address">Address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress">BillingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress">MailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput">AccountNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput">AdditionalInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput">AddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput">BillingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput">BirthDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput">BusinessEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput">BusinessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput">BusinessPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput">GenderStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput">HomePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput">MailingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput">MobilePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput">PartyTypeStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput">PersonalEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput">ShippingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber">AccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation">AdditionalInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate">BirthDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName">BusinessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString">GenderString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString">PartyTypeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress">PersonalEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address"></a>

```csharp
public CustomerprofilesProfileAddressOutputReference Address { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a>

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress"></a>

```csharp
public CustomerprofilesProfileBillingAddressOutputReference BillingAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a>

---

##### `MailingAddress`<sup>Required</sup> <a name="MailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress"></a>

```csharp
public CustomerprofilesProfileMailingAddressOutputReference MailingAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a>

---

##### `ShippingAddress`<sup>Required</sup> <a name="ShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress"></a>

```csharp
public CustomerprofilesProfileShippingAddressOutputReference ShippingAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a>

---

##### `AccountNumberInput`<sup>Optional</sup> <a name="AccountNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput"></a>

```csharp
public string AccountNumberInput { get; }
```

- *Type:* string

---

##### `AdditionalInformationInput`<sup>Optional</sup> <a name="AdditionalInformationInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput"></a>

```csharp
public string AdditionalInformationInput { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput"></a>

```csharp
public CustomerprofilesProfileAddress AddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BillingAddressInput`<sup>Optional</sup> <a name="BillingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput"></a>

```csharp
public CustomerprofilesProfileBillingAddress BillingAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `BirthDateInput`<sup>Optional</sup> <a name="BirthDateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput"></a>

```csharp
public string BirthDateInput { get; }
```

- *Type:* string

---

##### `BusinessEmailAddressInput`<sup>Optional</sup> <a name="BusinessEmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput"></a>

```csharp
public string BusinessEmailAddressInput { get; }
```

- *Type:* string

---

##### `BusinessNameInput`<sup>Optional</sup> <a name="BusinessNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput"></a>

```csharp
public string BusinessNameInput { get; }
```

- *Type:* string

---

##### `BusinessPhoneNumberInput`<sup>Optional</sup> <a name="BusinessPhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput"></a>

```csharp
public string BusinessPhoneNumberInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `GenderStringInput`<sup>Optional</sup> <a name="GenderStringInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput"></a>

```csharp
public string GenderStringInput { get; }
```

- *Type:* string

---

##### `HomePhoneNumberInput`<sup>Optional</sup> <a name="HomePhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput"></a>

```csharp
public string HomePhoneNumberInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `MailingAddressInput`<sup>Optional</sup> <a name="MailingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput"></a>

```csharp
public CustomerprofilesProfileMailingAddress MailingAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `MobilePhoneNumberInput`<sup>Optional</sup> <a name="MobilePhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput"></a>

```csharp
public string MobilePhoneNumberInput { get; }
```

- *Type:* string

---

##### `PartyTypeStringInput`<sup>Optional</sup> <a name="PartyTypeStringInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput"></a>

```csharp
public string PartyTypeStringInput { get; }
```

- *Type:* string

---

##### `PersonalEmailAddressInput`<sup>Optional</sup> <a name="PersonalEmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput"></a>

```csharp
public string PersonalEmailAddressInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `ShippingAddressInput`<sup>Optional</sup> <a name="ShippingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput"></a>

```csharp
public CustomerprofilesProfileShippingAddress ShippingAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber"></a>

```csharp
public string AccountNumber { get; }
```

- *Type:* string

---

##### `AdditionalInformation`<sup>Required</sup> <a name="AdditionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation"></a>

```csharp
public string AdditionalInformation { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BirthDate`<sup>Required</sup> <a name="BirthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate"></a>

```csharp
public string BirthDate { get; }
```

- *Type:* string

---

##### `BusinessEmailAddress`<sup>Required</sup> <a name="BusinessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress"></a>

```csharp
public string BusinessEmailAddress { get; }
```

- *Type:* string

---

##### `BusinessName`<sup>Required</sup> <a name="BusinessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName"></a>

```csharp
public string BusinessName { get; }
```

- *Type:* string

---

##### `BusinessPhoneNumber`<sup>Required</sup> <a name="BusinessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber"></a>

```csharp
public string BusinessPhoneNumber { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `GenderString`<sup>Required</sup> <a name="GenderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString"></a>

```csharp
public string GenderString { get; }
```

- *Type:* string

---

##### `HomePhoneNumber`<sup>Required</sup> <a name="HomePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber"></a>

```csharp
public string HomePhoneNumber { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MobilePhoneNumber`<sup>Required</sup> <a name="MobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber"></a>

```csharp
public string MobilePhoneNumber { get; }
```

- *Type:* string

---

##### `PartyTypeString`<sup>Required</sup> <a name="PartyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString"></a>

```csharp
public string PartyTypeString { get; }
```

- *Type:* string

---

##### `PersonalEmailAddress`<sup>Required</sup> <a name="PersonalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress"></a>

```csharp
public string PersonalEmailAddress { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesProfileAddress <a name="CustomerprofilesProfileAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileBillingAddress <a name="CustomerprofilesProfileBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileBillingAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileConfig <a name="CustomerprofilesProfileConfig" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    string AccountNumber = null,
    string AdditionalInformation = null,
    CustomerprofilesProfileAddress Address = null,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    CustomerprofilesProfileBillingAddress BillingAddress = null,
    string BirthDate = null,
    string BusinessEmailAddress = null,
    string BusinessName = null,
    string BusinessPhoneNumber = null,
    string EmailAddress = null,
    string FirstName = null,
    string GenderString = null,
    string HomePhoneNumber = null,
    string Id = null,
    string LastName = null,
    CustomerprofilesProfileMailingAddress MailingAddress = null,
    string MiddleName = null,
    string MobilePhoneNumber = null,
    string PartyTypeString = null,
    string PersonalEmailAddress = null,
    string PhoneNumber = null,
    CustomerprofilesProfileShippingAddress ShippingAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber">AccountNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation">AdditionalInformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address">Address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress">BillingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate">BirthDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName">BusinessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString">GenderString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress">MailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName">MiddleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString">PartyTypeString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress">PersonalEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `AccountNumber`<sup>Optional</sup> <a name="AccountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber"></a>

```csharp
public string AccountNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `AdditionalInformation`<sup>Optional</sup> <a name="AdditionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation"></a>

```csharp
public string AdditionalInformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address"></a>

```csharp
public CustomerprofilesProfileAddress Address { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `BillingAddress`<sup>Optional</sup> <a name="BillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress"></a>

```csharp
public CustomerprofilesProfileBillingAddress BillingAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `BirthDate`<sup>Optional</sup> <a name="BirthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate"></a>

```csharp
public string BirthDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `BusinessEmailAddress`<sup>Optional</sup> <a name="BusinessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress"></a>

```csharp
public string BusinessEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `BusinessName`<sup>Optional</sup> <a name="BusinessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName"></a>

```csharp
public string BusinessName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `BusinessPhoneNumber`<sup>Optional</sup> <a name="BusinessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber"></a>

```csharp
public string BusinessPhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `GenderString`<sup>Optional</sup> <a name="GenderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString"></a>

```csharp
public string GenderString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `HomePhoneNumber`<sup>Optional</sup> <a name="HomePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber"></a>

```csharp
public string HomePhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `MailingAddress`<sup>Optional</sup> <a name="MailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress"></a>

```csharp
public CustomerprofilesProfileMailingAddress MailingAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `MobilePhoneNumber`<sup>Optional</sup> <a name="MobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber"></a>

```csharp
public string MobilePhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `PartyTypeString`<sup>Optional</sup> <a name="PartyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString"></a>

```csharp
public string PartyTypeString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `PersonalEmailAddress`<sup>Optional</sup> <a name="PersonalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress"></a>

```csharp
public string PersonalEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `ShippingAddress`<sup>Optional</sup> <a name="ShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress"></a>

```csharp
public CustomerprofilesProfileShippingAddress ShippingAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

### CustomerprofilesProfileMailingAddress <a name="CustomerprofilesProfileMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileMailingAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileShippingAddress <a name="CustomerprofilesProfileShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileShippingAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesProfileAddressOutputReference <a name="CustomerprofilesProfileAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---


### CustomerprofilesProfileBillingAddressOutputReference <a name="CustomerprofilesProfileBillingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileBillingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileBillingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---


### CustomerprofilesProfileMailingAddressOutputReference <a name="CustomerprofilesProfileMailingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileMailingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileMailingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---


### CustomerprofilesProfileShippingAddressOutputReference <a name="CustomerprofilesProfileShippingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesProfileShippingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileShippingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---



