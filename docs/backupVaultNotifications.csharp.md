# `backupVaultNotifications` Submodule <a name="`backupVaultNotifications` Submodule" id="@cdktf/provider-aws.backupVaultNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupVaultNotifications <a name="BackupVaultNotifications" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications aws_backup_vault_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupVaultNotifications(Construct Scope, string Id, BackupVaultNotificationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig">BackupVaultNotificationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig">BackupVaultNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupVaultNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupVaultNotifications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupVaultNotifications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupVaultNotifications.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupVaultNotifications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupVaultNotifications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupVaultNotifications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupVaultNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupVaultNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultArn">BackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEventsInput">BackupVaultEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultNameInput">BackupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupVaultArn`<sup>Required</sup> <a name="BackupVaultArn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultArn"></a>

```csharp
public string BackupVaultArn { get; }
```

- *Type:* string

---

##### `BackupVaultEventsInput`<sup>Optional</sup> <a name="BackupVaultEventsInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEventsInput"></a>

```csharp
public string[] BackupVaultEventsInput { get; }
```

- *Type:* string[]

---

##### `BackupVaultNameInput`<sup>Optional</sup> <a name="BackupVaultNameInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultNameInput"></a>

```csharp
public string BackupVaultNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `BackupVaultEvents`<sup>Required</sup> <a name="BackupVaultEvents" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEvents"></a>

```csharp
public string[] BackupVaultEvents { get; }
```

- *Type:* string[]

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupVaultNotificationsConfig <a name="BackupVaultNotificationsConfig" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupVaultNotificationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] BackupVaultEvents,
    string BackupVaultName,
    string SnsTopicArn,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#backup_vault_events BackupVaultNotifications#backup_vault_events}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#backup_vault_name BackupVaultNotifications#backup_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#sns_topic_arn BackupVaultNotifications#sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#id BackupVaultNotifications#id}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupVaultEvents`<sup>Required</sup> <a name="BackupVaultEvents" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultEvents"></a>

```csharp
public string[] BackupVaultEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#backup_vault_events BackupVaultNotifications#backup_vault_events}.

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#backup_vault_name BackupVaultNotifications#backup_vault_name}.

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#sns_topic_arn BackupVaultNotifications#sns_topic_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#id BackupVaultNotifications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_vault_notifications#region BackupVaultNotifications#region}

---



