# `accountPrimaryContact` Submodule <a name="`accountPrimaryContact` Submodule" id="@cdktf/provider-aws.accountPrimaryContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPrimaryContact <a name="AccountPrimaryContact" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact aws_account_primary_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AccountPrimaryContact(Construct Scope, string Id, AccountPrimaryContactConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig">AccountPrimaryContactConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig">AccountPrimaryContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3">ResetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty">ResetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion">ResetStateOrRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl">ResetWebsiteUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2"></a>

```csharp
private void ResetAddressLine2()
```

##### `ResetAddressLine3` <a name="ResetAddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3"></a>

```csharp
private void ResetAddressLine3()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName"></a>

```csharp
private void ResetCompanyName()
```

##### `ResetDistrictOrCounty` <a name="ResetDistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty"></a>

```csharp
private void ResetDistrictOrCounty()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStateOrRegion` <a name="ResetStateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion"></a>

```csharp
private void ResetStateOrRegion()
```

##### `ResetWebsiteUrl` <a name="ResetWebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl"></a>

```csharp
private void ResetWebsiteUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AccountPrimaryContact.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AccountPrimaryContact.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AccountPrimaryContact.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AccountPrimaryContact.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountPrimaryContact to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountPrimaryContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccountPrimaryContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input">AddressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input">AddressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input">AddressLine3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput">DistrictOrCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput">StateOrRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput">WebsiteUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl">WebsiteUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input"></a>

```csharp
public string AddressLine1Input { get; }
```

- *Type:* string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input"></a>

```csharp
public string AddressLine2Input { get; }
```

- *Type:* string

---

##### `AddressLine3Input`<sup>Optional</sup> <a name="AddressLine3Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input"></a>

```csharp
public string AddressLine3Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `DistrictOrCountyInput`<sup>Optional</sup> <a name="DistrictOrCountyInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput"></a>

```csharp
public string DistrictOrCountyInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `StateOrRegionInput`<sup>Optional</sup> <a name="StateOrRegionInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput"></a>

```csharp
public string StateOrRegionInput { get; }
```

- *Type:* string

---

##### `WebsiteUrlInput`<sup>Optional</sup> <a name="WebsiteUrlInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput"></a>

```csharp
public string WebsiteUrlInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; }
```

- *Type:* string

---

##### `WebsiteUrl`<sup>Required</sup> <a name="WebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl"></a>

```csharp
public string WebsiteUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPrimaryContactConfig <a name="AccountPrimaryContactConfig" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AccountPrimaryContactConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AddressLine1,
    string City,
    string CountryCode,
    string FullName,
    string PhoneNumber,
    string PostalCode,
    string AccountId = null,
    string AddressLine2 = null,
    string AddressLine3 = null,
    string CompanyName = null,
    string DistrictOrCounty = null,
    string Id = null,
    string StateOrRegion = null,
    string WebsiteUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1">AddressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2">AddressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3">AddressLine3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName">CompanyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl">WebsiteUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `AddressLine3`<sup>Optional</sup> <a name="AddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `DistrictOrCounty`<sup>Optional</sup> <a name="DistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StateOrRegion`<sup>Optional</sup> <a name="StateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `WebsiteUrl`<sup>Optional</sup> <a name="WebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl"></a>

```csharp
public string WebsiteUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---



