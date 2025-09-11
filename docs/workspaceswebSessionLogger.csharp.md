# `workspaceswebSessionLogger` Submodule <a name="`workspaceswebSessionLogger` Submodule" id="@cdktf/provider-aws.workspaceswebSessionLogger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebSessionLogger <a name="WorkspaceswebSessionLogger" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger aws_workspacesweb_session_logger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLogger(Construct Scope, string Id, WorkspaceswebSessionLoggerConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig">WorkspaceswebSessionLoggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig">WorkspaceswebSessionLoggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter">PutEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetEventFilter">ResetEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventFilter` <a name="PutEventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter"></a>

```csharp
private void PutEventFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter.parameter.value"></a>

- *Type:* object

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext"></a>

```csharp
private void ResetAdditionalEncryptionContext()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEventFilter` <a name="ResetEventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetEventFilter"></a>

```csharp
private void ResetEventFilter()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebSessionLogger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebSessionLogger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebSessionLogger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebSessionLogger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebSessionLogger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceswebSessionLogger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebSessionLogger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebSessionLogger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebSessionLogger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter">EventFilter</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList">WorkspaceswebSessionLoggerEventFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList">WorkspaceswebSessionLoggerLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn">SessionLoggerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput">EventFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter"></a>

```csharp
public WorkspaceswebSessionLoggerEventFilterList EventFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList">WorkspaceswebSessionLoggerEventFilterList</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration"></a>

```csharp
public WorkspaceswebSessionLoggerLogConfigurationList LogConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList">WorkspaceswebSessionLoggerLogConfigurationList</a>

---

##### `SessionLoggerArn`<sup>Required</sup> <a name="SessionLoggerArn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn"></a>

```csharp
public string SessionLoggerArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput"></a>

```csharp
public string CustomerManagedKeyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EventFilterInput`<sup>Optional</sup> <a name="EventFilterInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput"></a>

```csharp
public object EventFilterInput { get; }
```

- *Type:* object

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput"></a>

```csharp
public object LogConfigurationInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebSessionLoggerConfig <a name="WorkspaceswebSessionLoggerConfig" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext = null,
    string CustomerManagedKey = null,
    string DisplayName = null,
    object EventFilter = null,
    object LogConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter">EventFilter</a></code> | <code>object</code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration">LogConfiguration</a></code> | <code>object</code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}.

---

##### `EventFilter`<sup>Optional</sup> <a name="EventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter"></a>

```csharp
public object EventFilter { get; set; }
```

- *Type:* object

event_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration"></a>

```csharp
public object LogConfiguration { get; set; }
```

- *Type:* object

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#region WorkspaceswebSessionLogger#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}.

---

### WorkspaceswebSessionLoggerEventFilter <a name="WorkspaceswebSessionLoggerEventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerEventFilter {
    object All = null,
    string[] Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all">All</a></code> | <code>object</code> | all block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include">Include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#all WorkspaceswebSessionLogger#all}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}.

---

### WorkspaceswebSessionLoggerEventFilterAll <a name="WorkspaceswebSessionLoggerEventFilterAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerEventFilterAll {

};
```


### WorkspaceswebSessionLoggerLogConfiguration <a name="WorkspaceswebSessionLoggerLogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerLogConfiguration {
    object S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3">S3</a></code> | <code>object</code> | s3 block. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3"></a>

```csharp
public object S3 { get; set; }
```

- *Type:* object

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#s3 WorkspaceswebSessionLogger#s3}

---

### WorkspaceswebSessionLoggerLogConfigurationS3 <a name="WorkspaceswebSessionLoggerLogConfigurationS3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerLogConfigurationS3 {
    string Bucket,
    string FolderStructure,
    string LogFileFormat,
    string BucketOwner = null,
    string KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure">FolderStructure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat">LogFileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}.

---

##### `FolderStructure`<sup>Required</sup> <a name="FolderStructure" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure"></a>

```csharp
public string FolderStructure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}.

---

##### `LogFileFormat`<sup>Required</sup> <a name="LogFileFormat" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat"></a>

```csharp
public string LogFileFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebSessionLoggerEventFilterAllList <a name="WorkspaceswebSessionLoggerEventFilterAllList" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerEventFilterAllList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.get"></a>

```csharp
private WorkspaceswebSessionLoggerEventFilterAllOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerEventFilterAllOutputReference <a name="WorkspaceswebSessionLoggerEventFilterAllOutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerEventFilterAllOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerEventFilterList <a name="WorkspaceswebSessionLoggerEventFilterList" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerEventFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.get"></a>

```csharp
private WorkspaceswebSessionLoggerEventFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerEventFilterOutputReference <a name="WorkspaceswebSessionLoggerEventFilterOutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerEventFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.putAll">PutAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAll` <a name="PutAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.putAll"></a>

```csharp
private void PutAll(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.putAll.parameter.value"></a>

- *Type:* object

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all">All</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList">WorkspaceswebSessionLoggerEventFilterAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all"></a>

```csharp
public WorkspaceswebSessionLoggerEventFilterAllList All { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList">WorkspaceswebSessionLoggerEventFilterAllList</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerLogConfigurationList <a name="WorkspaceswebSessionLoggerLogConfigurationList" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerLogConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.get"></a>

```csharp
private WorkspaceswebSessionLoggerLogConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerLogConfigurationOutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationOutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3"></a>

```csharp
private void PutS3(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* object

---

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List">WorkspaceswebSessionLoggerLogConfigurationS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3"></a>

```csharp
public WorkspaceswebSessionLoggerLogConfigurationS3List S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List">WorkspaceswebSessionLoggerLogConfigurationS3List</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input"></a>

```csharp
public object S3Input { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerLogConfigurationS3List <a name="WorkspaceswebSessionLoggerLogConfigurationS3List" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerLogConfigurationS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.get"></a>

```csharp
private WorkspaceswebSessionLoggerLogConfigurationS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspaceswebSessionLoggerLogConfigurationS3OutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationS3OutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebSessionLoggerLogConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix"></a>

```csharp
private void ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput">FolderStructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput">LogFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure">FolderStructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat">LogFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `FolderStructureInput`<sup>Optional</sup> <a name="FolderStructureInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput"></a>

```csharp
public string FolderStructureInput { get; }
```

- *Type:* string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput"></a>

```csharp
public string KeyPrefixInput { get; }
```

- *Type:* string

---

##### `LogFileFormatInput`<sup>Optional</sup> <a name="LogFileFormatInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput"></a>

```csharp
public string LogFileFormatInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `FolderStructure`<sup>Required</sup> <a name="FolderStructure" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure"></a>

```csharp
public string FolderStructure { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `LogFileFormat`<sup>Required</sup> <a name="LogFileFormat" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat"></a>

```csharp
public string LogFileFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



