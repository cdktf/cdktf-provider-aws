# `opensearchPackage` Submodule <a name="`opensearchPackage` Submodule" id="@cdktf/provider-aws.opensearchPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchPackage <a name="OpensearchPackage" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package aws_opensearch_package}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchPackage(Construct Scope, string Id, OpensearchPackageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig">OpensearchPackageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig">OpensearchPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource">PutPackageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetPackageDescription">ResetPackageDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPackageSource` <a name="PutPackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource"></a>

```csharp
private void PutPackageSource(OpensearchPackagePackageSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPackageDescription` <a name="ResetPackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetPackageDescription"></a>

```csharp
private void ResetPackageDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchPackage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchPackage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchPackage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchPackage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchPackage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.availablePackageVersion">AvailablePackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageId">PackageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSource">PackageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference">OpensearchPackagePackageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescriptionInput">PackageDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageNameInput">PackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSourceInput">PackageSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageTypeInput">PackageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescription">PackageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailablePackageVersion`<sup>Required</sup> <a name="AvailablePackageVersion" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.availablePackageVersion"></a>

```csharp
public string AvailablePackageVersion { get; }
```

- *Type:* string

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageId"></a>

```csharp
public string PackageId { get; }
```

- *Type:* string

---

##### `PackageSource`<sup>Required</sup> <a name="PackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSource"></a>

```csharp
public OpensearchPackagePackageSourceOutputReference PackageSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference">OpensearchPackagePackageSourceOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PackageDescriptionInput`<sup>Optional</sup> <a name="PackageDescriptionInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescriptionInput"></a>

```csharp
public string PackageDescriptionInput { get; }
```

- *Type:* string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageNameInput"></a>

```csharp
public string PackageNameInput { get; }
```

- *Type:* string

---

##### `PackageSourceInput`<sup>Optional</sup> <a name="PackageSourceInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSourceInput"></a>

```csharp
public OpensearchPackagePackageSource PackageSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageTypeInput"></a>

```csharp
public string PackageTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PackageDescription`<sup>Required</sup> <a name="PackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescription"></a>

```csharp
public string PackageDescription { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchPackageConfig <a name="OpensearchPackageConfig" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchPackageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PackageName,
    OpensearchPackagePackageSource PackageSource,
    string PackageType,
    string Id = null,
    string PackageDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageName">PackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageSource">PackageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | package_source block. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageType">PackageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#id OpensearchPackage#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageDescription">PackageDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageName"></a>

```csharp
public string PackageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}.

---

##### `PackageSource`<sup>Required</sup> <a name="PackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageSource"></a>

```csharp
public OpensearchPackagePackageSource PackageSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

package_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_source OpensearchPackage#package_source}

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageType"></a>

```csharp
public string PackageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#id OpensearchPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageDescription`<sup>Optional</sup> <a name="PackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageDescription"></a>

```csharp
public string PackageDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}.

---

### OpensearchPackagePackageSource <a name="OpensearchPackagePackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchPackagePackageSource {
    string S3BucketName,
    string S3Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}.

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchPackagePackageSourceOutputReference <a name="OpensearchPackagePackageSourceOutputReference" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchPackagePackageSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.internalValue"></a>

```csharp
public OpensearchPackagePackageSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---



