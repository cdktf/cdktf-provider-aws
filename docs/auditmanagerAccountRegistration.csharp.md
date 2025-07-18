# `auditmanagerAccountRegistration` Submodule <a name="`auditmanagerAccountRegistration` Submodule" id="@cdktf/provider-aws.auditmanagerAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAccountRegistration <a name="AuditmanagerAccountRegistration" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration aws_auditmanager_account_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AuditmanagerAccountRegistration(Construct Scope, string Id, AuditmanagerAccountRegistrationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig">AuditmanagerAccountRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig">AuditmanagerAccountRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDelegatedAdminAccount">ResetDelegatedAdminAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDeregisterOnDestroy">ResetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDelegatedAdminAccount` <a name="ResetDelegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDelegatedAdminAccount"></a>

```csharp
private void ResetDelegatedAdminAccount()
```

##### `ResetDeregisterOnDestroy` <a name="ResetDeregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDeregisterOnDestroy"></a>

```csharp
private void ResetDeregisterOnDestroy()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuditmanagerAccountRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAccountRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAccountRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAccountRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAccountRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AuditmanagerAccountRegistration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAccountRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAccountRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AuditmanagerAccountRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccountInput">DelegatedAdminAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroyInput">DeregisterOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccount">DelegatedAdminAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroy">DeregisterOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DelegatedAdminAccountInput`<sup>Optional</sup> <a name="DelegatedAdminAccountInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccountInput"></a>

```csharp
public string DelegatedAdminAccountInput { get; }
```

- *Type:* string

---

##### `DeregisterOnDestroyInput`<sup>Optional</sup> <a name="DeregisterOnDestroyInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroyInput"></a>

```csharp
public object DeregisterOnDestroyInput { get; }
```

- *Type:* object

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DelegatedAdminAccount`<sup>Required</sup> <a name="DelegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccount"></a>

```csharp
public string DelegatedAdminAccount { get; }
```

- *Type:* string

---

##### `DeregisterOnDestroy`<sup>Required</sup> <a name="DeregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroy"></a>

```csharp
public object DeregisterOnDestroy { get; }
```

- *Type:* object

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAccountRegistrationConfig <a name="AuditmanagerAccountRegistrationConfig" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AuditmanagerAccountRegistrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DelegatedAdminAccount = null,
    object DeregisterOnDestroy = null,
    string KmsKey = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.delegatedAdminAccount">DelegatedAdminAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.deregisterOnDestroy">DeregisterOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DelegatedAdminAccount`<sup>Optional</sup> <a name="DelegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.delegatedAdminAccount"></a>

```csharp
public string DelegatedAdminAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}.

---

##### `DeregisterOnDestroy`<sup>Optional</sup> <a name="DeregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.deregisterOnDestroy"></a>

```csharp
public object DeregisterOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_account_registration#region AuditmanagerAccountRegistration#region}

---



