# `securityhubOrganizationAdminAccount` Submodule <a name="`securityhubOrganizationAdminAccount` Submodule" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubOrganizationAdminAccount <a name="SecurityhubOrganizationAdminAccount" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account aws_securityhub_organization_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityhubOrganizationAdminAccount(Construct Scope, string Id, SecurityhubOrganizationAdminAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig">SecurityhubOrganizationAdminAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig">SecurityhubOrganizationAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityhubOrganizationAdminAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubOrganizationAdminAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubOrganizationAdminAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubOrganizationAdminAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubOrganizationAdminAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityhubOrganizationAdminAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubOrganizationAdminAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubOrganizationAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubOrganizationAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.adminAccountIdInput">AdminAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.adminAccountId">AdminAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminAccountIdInput`<sup>Optional</sup> <a name="AdminAccountIdInput" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.adminAccountIdInput"></a>

```csharp
public string AdminAccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.adminAccountId"></a>

```csharp
public string AdminAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubOrganizationAdminAccountConfig <a name="SecurityhubOrganizationAdminAccountConfig" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityhubOrganizationAdminAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminAccountId,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.adminAccountId">AdminAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account#admin_account_id SecurityhubOrganizationAdminAccount#admin_account_id}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account#id SecurityhubOrganizationAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.adminAccountId"></a>

```csharp
public string AdminAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account#admin_account_id SecurityhubOrganizationAdminAccount#admin_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account#id SecurityhubOrganizationAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.securityhubOrganizationAdminAccount.SecurityhubOrganizationAdminAccountConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/securityhub_organization_admin_account#region SecurityhubOrganizationAdminAccount#region}

---



