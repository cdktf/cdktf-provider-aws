# `cloudtrailOrganizationDelegatedAdminAccount` Submodule <a name="`cloudtrailOrganizationDelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailOrganizationDelegatedAdminAccount <a name="CloudtrailOrganizationDelegatedAdminAccount" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_organization_delegated_admin_account aws_cloudtrail_organization_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailOrganizationDelegatedAdminAccount(Construct Scope, string Id, CloudtrailOrganizationDelegatedAdminAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig">CloudtrailOrganizationDelegatedAdminAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig">CloudtrailOrganizationDelegatedAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudtrailOrganizationDelegatedAdminAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudtrailOrganizationDelegatedAdminAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudtrailOrganizationDelegatedAdminAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudtrailOrganizationDelegatedAdminAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudtrailOrganizationDelegatedAdminAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudtrailOrganizationDelegatedAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_organization_delegated_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudtrailOrganizationDelegatedAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal">ServicePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal"></a>

```csharp
public string ServicePrincipal { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailOrganizationDelegatedAdminAccountConfig <a name="CloudtrailOrganizationDelegatedAdminAccountConfig" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailOrganizationDelegatedAdminAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}.

---



