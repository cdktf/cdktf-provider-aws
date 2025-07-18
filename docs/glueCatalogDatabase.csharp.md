# `glueCatalogDatabase` Submodule <a name="`glueCatalogDatabase` Submodule" id="@cdktf/provider-aws.glueCatalogDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogDatabase <a name="GlueCatalogDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database aws_glue_catalog_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabase(Construct Scope, string Id, GlueCatalogDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig">GlueCatalogDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig">GlueCatalogDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission">PutCreateTableDefaultPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase">PutFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase">PutTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission">ResetCreateTableDefaultPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetFederatedDatabase">ResetFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase">ResetTargetDatabase</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateTableDefaultPermission` <a name="PutCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission"></a>

```csharp
private void PutCreateTableDefaultPermission(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission.parameter.value"></a>

- *Type:* object

---

##### `PutFederatedDatabase` <a name="PutFederatedDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase"></a>

```csharp
private void PutFederatedDatabase(GlueCatalogDatabaseFederatedDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

---

##### `PutTargetDatabase` <a name="PutTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase"></a>

```csharp
private void PutTargetDatabase(GlueCatalogDatabaseTargetDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetCreateTableDefaultPermission` <a name="ResetCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission"></a>

```csharp
private void ResetCreateTableDefaultPermission()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFederatedDatabase` <a name="ResetFederatedDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetFederatedDatabase"></a>

```csharp
private void ResetFederatedDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri"></a>

```csharp
private void ResetLocationUri()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargetDatabase` <a name="ResetTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase"></a>

```csharp
private void ResetTargetDatabase()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCatalogDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCatalogDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlueCatalogDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission">CreateTableDefaultPermission</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabase">FederatedDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference">GlueCatalogDatabaseFederatedDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase">TargetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput">CreateTableDefaultPermissionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabaseInput">FederatedDatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput">LocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput">TargetDatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTableDefaultPermission`<sup>Required</sup> <a name="CreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission"></a>

```csharp
public GlueCatalogDatabaseCreateTableDefaultPermissionList CreateTableDefaultPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a>

---

##### `FederatedDatabase`<sup>Required</sup> <a name="FederatedDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabase"></a>

```csharp
public GlueCatalogDatabaseFederatedDatabaseOutputReference FederatedDatabase { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference">GlueCatalogDatabaseFederatedDatabaseOutputReference</a>

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase"></a>

```csharp
public GlueCatalogDatabaseTargetDatabaseOutputReference TargetDatabase { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `CreateTableDefaultPermissionInput`<sup>Optional</sup> <a name="CreateTableDefaultPermissionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput"></a>

```csharp
public object CreateTableDefaultPermissionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FederatedDatabaseInput`<sup>Optional</sup> <a name="FederatedDatabaseInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabaseInput"></a>

```csharp
public GlueCatalogDatabaseFederatedDatabase FederatedDatabaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput"></a>

```csharp
public string LocationUriInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetDatabaseInput`<sup>Optional</sup> <a name="TargetDatabaseInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput"></a>

```csharp
public GlueCatalogDatabaseTargetDatabase TargetDatabaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogDatabaseConfig <a name="GlueCatalogDatabaseConfig" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string CatalogId = null,
    object CreateTableDefaultPermission = null,
    string Description = null,
    GlueCatalogDatabaseFederatedDatabase FederatedDatabase = null,
    string Id = null,
    string LocationUri = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    GlueCatalogDatabaseTargetDatabase TargetDatabase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission">CreateTableDefaultPermission</a></code> | <code>object</code> | create_table_default_permission block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.federatedDatabase">FederatedDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | federated_database block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri">LocationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase">TargetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `CreateTableDefaultPermission`<sup>Optional</sup> <a name="CreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission"></a>

```csharp
public object CreateTableDefaultPermission { get; set; }
```

- *Type:* object

create_table_default_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `FederatedDatabase`<sup>Optional</sup> <a name="FederatedDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.federatedDatabase"></a>

```csharp
public GlueCatalogDatabaseFederatedDatabase FederatedDatabase { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

federated_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#federated_database GlueCatalogDatabase#federated_database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri"></a>

```csharp
public string LocationUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}.

---

##### `TargetDatabase`<sup>Optional</sup> <a name="TargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase"></a>

```csharp
public GlueCatalogDatabaseTargetDatabase TargetDatabase { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

### GlueCatalogDatabaseCreateTableDefaultPermission <a name="GlueCatalogDatabaseCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseCreateTableDefaultPermission {
    string[] Permissions = null,
    GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal Principal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions">Permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#permissions GlueCatalogDatabase#permissions}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal">Principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | principal block. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#permissions GlueCatalogDatabase#permissions}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal"></a>

```csharp
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal Principal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#principal GlueCatalogDatabase#principal}

---

### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal {
    string DataLakePrincipalIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}. |

---

##### `DataLakePrincipalIdentifier`<sup>Optional</sup> <a name="DataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier"></a>

```csharp
public string DataLakePrincipalIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}.

---

### GlueCatalogDatabaseFederatedDatabase <a name="GlueCatalogDatabaseFederatedDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseFederatedDatabase {
    string ConnectionName = null,
    string Identifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}.

---

### GlueCatalogDatabaseTargetDatabase <a name="GlueCatalogDatabaseTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseTargetDatabase {
    string CatalogId,
    string DatabaseName,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}. |

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogDatabaseCreateTableDefaultPermissionList <a name="GlueCatalogDatabaseCreateTableDefaultPermissionList" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseCreateTableDefaultPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get"></a>

```csharp
private GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal"></a>

```csharp
private void PutPrincipal(GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput">PrincipalInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal"></a>

```csharp
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput"></a>

```csharp
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal PrincipalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier">ResetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLakePrincipalIdentifier` <a name="ResetDataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```csharp
private void ResetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">DataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="DataLakePrincipalIdentifierInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```csharp
public string DataLakePrincipalIdentifierInput { get; }
```

- *Type:* string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```csharp
public string DataLakePrincipalIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---


### GlueCatalogDatabaseFederatedDatabaseOutputReference <a name="GlueCatalogDatabaseFederatedDatabaseOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseFederatedDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogDatabaseFederatedDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

---


### GlueCatalogDatabaseTargetDatabaseOutputReference <a name="GlueCatalogDatabaseTargetDatabaseOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogDatabaseTargetDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogDatabaseTargetDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---



