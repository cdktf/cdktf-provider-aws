# `licensemanagerGrant` Submodule <a name="`licensemanagerGrant` Submodule" id="@cdktf/provider-aws.licensemanagerGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerGrant <a name="LicensemanagerGrant" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant aws_licensemanager_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LicensemanagerGrant(Construct Scope, string Id, LicensemanagerGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig">LicensemanagerGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig">LicensemanagerGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LicensemanagerGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LicensemanagerGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LicensemanagerGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.parentArn">ParentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperationsInput">AllowedOperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArnInput">LicenseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperations">AllowedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArn">LicenseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principal">Principal</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `ParentArn`<sup>Required</sup> <a name="ParentArn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.parentArn"></a>

```csharp
public string ParentArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AllowedOperationsInput`<sup>Optional</sup> <a name="AllowedOperationsInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperationsInput"></a>

```csharp
public string[] AllowedOperationsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseArnInput`<sup>Optional</sup> <a name="LicenseArnInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArnInput"></a>

```csharp
public string LicenseArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `AllowedOperations`<sup>Required</sup> <a name="AllowedOperations" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperations"></a>

```csharp
public string[] AllowedOperations { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArn"></a>

```csharp
public string LicenseArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerGrantConfig <a name="LicensemanagerGrantConfig" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LicensemanagerGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedOperations,
    string LicenseArn,
    string Name,
    string Principal,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.allowedOperations">AllowedOperations</a></code> | <code>string[]</code> | Allowed operations for the grant. This is a subset of the allowed operations on the license. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.licenseArn">LicenseArn</a></code> | <code>string</code> | License ARN. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.name">Name</a></code> | <code>string</code> | Name of the grant. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.principal">Principal</a></code> | <code>string</code> | The grantee principal ARN. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#id LicensemanagerGrant#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedOperations`<sup>Required</sup> <a name="AllowedOperations" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.allowedOperations"></a>

```csharp
public string[] AllowedOperations { get; set; }
```

- *Type:* string[]

Allowed operations for the grant. This is a subset of the allowed operations on the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#allowed_operations LicensemanagerGrant#allowed_operations}

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.licenseArn"></a>

```csharp
public string LicenseArn { get; set; }
```

- *Type:* string

License ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#license_arn LicensemanagerGrant#license_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#name LicensemanagerGrant#name}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

The grantee principal ARN.

The target account for the grant in the form of the ARN for an account principal of the root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#principal LicensemanagerGrant#principal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/licensemanager_grant#id LicensemanagerGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



