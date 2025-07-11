# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktf/provider-aws.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database aws_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailDatabase(Construct Scope, string Id, LightsailDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetBackupRetentionEnabled">ResetBackupRetentionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetBackupRetentionEnabled` <a name="ResetBackupRetentionEnabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetBackupRetentionEnabled"></a>

```csharp
private void ResetBackupRetentionEnabled()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetFinalSnapshotName"></a>

```csharp
private void ResetFinalSnapshotName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetSkipFinalSnapshot"></a>

```csharp
private void ResetSkipFinalSnapshot()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LightsailDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LightsailDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LightsailDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.diskSize">DiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointAddress">MasterEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointPort">MasterEndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.ramSize">RamSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.secondaryAvailabilityZone">SecondaryAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.supportCode">SupportCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabledInput">BackupRetentionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintIdInput">BlueprintIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">MasterDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">RelationalDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabled">BackupRetentionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintId">BlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">MasterDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPassword">MasterPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsername">MasterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CaCertificateIdentifier`<sup>Required</sup> <a name="CaCertificateIdentifier" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```csharp
public string CaCertificateIdentifier { get; }
```

- *Type:* string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.diskSize"></a>

```csharp
public double DiskSize { get; }
```

- *Type:* double

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `MasterEndpointAddress`<sup>Required</sup> <a name="MasterEndpointAddress" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointAddress"></a>

```csharp
public string MasterEndpointAddress { get; }
```

- *Type:* string

---

##### `MasterEndpointPort`<sup>Required</sup> <a name="MasterEndpointPort" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointPort"></a>

```csharp
public double MasterEndpointPort { get; }
```

- *Type:* double

---

##### `RamSize`<sup>Required</sup> <a name="RamSize" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.ramSize"></a>

```csharp
public double RamSize { get; }
```

- *Type:* double

---

##### `SecondaryAvailabilityZone`<sup>Required</sup> <a name="SecondaryAvailabilityZone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.secondaryAvailabilityZone"></a>

```csharp
public string SecondaryAvailabilityZone { get; }
```

- *Type:* string

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.supportCode"></a>

```csharp
public string SupportCode { get; }
```

- *Type:* string

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BackupRetentionEnabledInput`<sup>Optional</sup> <a name="BackupRetentionEnabledInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabledInput"></a>

```csharp
public object BackupRetentionEnabledInput { get; }
```

- *Type:* object

---

##### `BlueprintIdInput`<sup>Optional</sup> <a name="BlueprintIdInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintIdInput"></a>

```csharp
public string BlueprintIdInput { get; }
```

- *Type:* string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotNameInput"></a>

```csharp
public string FinalSnapshotNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MasterDatabaseNameInput`<sup>Optional</sup> <a name="MasterDatabaseNameInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```csharp
public string MasterDatabaseNameInput { get; }
```

- *Type:* string

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPasswordInput"></a>

```csharp
public string MasterPasswordInput { get; }
```

- *Type:* string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```csharp
public string MasterUsernameInput { get; }
```

- *Type:* string

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```csharp
public object PubliclyAccessibleInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RelationalDatabaseNameInput`<sup>Optional</sup> <a name="RelationalDatabaseNameInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```csharp
public string RelationalDatabaseNameInput { get; }
```

- *Type:* string

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshotInput"></a>

```csharp
public object SkipFinalSnapshotInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `BackupRetentionEnabled`<sup>Required</sup> <a name="BackupRetentionEnabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabled"></a>

```csharp
public object BackupRetentionEnabled { get; }
```

- *Type:* object

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintId"></a>

```csharp
public string BlueprintId { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MasterDatabaseName`<sup>Required</sup> <a name="MasterDatabaseName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```csharp
public string MasterDatabaseName { get; }
```

- *Type:* string

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPassword"></a>

```csharp
public string MasterPassword { get; }
```

- *Type:* string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```csharp
public string MasterUsername { get; }
```

- *Type:* string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```csharp
public string RelationalDatabaseName { get; }
```

- *Type:* string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BlueprintId,
    string BundleId,
    string MasterDatabaseName,
    string MasterPassword,
    string MasterUsername,
    string RelationalDatabaseName,
    object ApplyImmediately = null,
    string AvailabilityZone = null,
    object BackupRetentionEnabled = null,
    string FinalSnapshotName = null,
    string Id = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    object PubliclyAccessible = null,
    string Region = null,
    object SkipFinalSnapshot = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.blueprintId">BlueprintId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#bundle_id LightsailDatabase#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">MasterDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterPassword">MasterPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#master_password LightsailDatabase#master_password}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">MasterUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.backupRetentionEnabled">BackupRetentionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#id LightsailDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#tags_all LightsailDatabase#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.blueprintId"></a>

```csharp
public string BlueprintId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}.

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#bundle_id LightsailDatabase#bundle_id}.

---

##### `MasterDatabaseName`<sup>Required</sup> <a name="MasterDatabaseName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```csharp
public string MasterDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}.

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterPassword"></a>

```csharp
public string MasterPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#master_password LightsailDatabase#master_password}.

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```csharp
public string MasterUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}.

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```csharp
public string RelationalDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}.

---

##### `BackupRetentionEnabled`<sup>Optional</sup> <a name="BackupRetentionEnabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.backupRetentionEnabled"></a>

```csharp
public object BackupRetentionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}.

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#id LightsailDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}.

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#region LightsailDatabase#region}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lightsail_database#tags_all LightsailDatabase#tags_all}.

---



