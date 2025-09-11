# `servicequotasServiceQuota` Submodule <a name="`servicequotasServiceQuota` Submodule" id="@cdktf/provider-aws.servicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasServiceQuota <a name="ServicequotasServiceQuota" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuota(Construct Scope, string Id, ServicequotasServiceQuotaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig">ServicequotasServiceQuotaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig">ServicequotasServiceQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasServiceQuota.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasServiceQuota.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasServiceQuota.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasServiceQuota.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicequotasServiceQuota to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicequotasServiceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicequotasServiceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable">Adjustable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue">DefaultValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName">QuotaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId">RequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus">RequestStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.usageMetric">UsageMetric</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList">ServicequotasServiceQuotaUsageMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput">QuotaCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput">ServiceCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode">QuotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode">ServiceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value">Value</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Adjustable`<sup>Required</sup> <a name="Adjustable" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable"></a>

```csharp
public IResolvable Adjustable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue"></a>

```csharp
public double DefaultValue { get; }
```

- *Type:* double

---

##### `QuotaName`<sup>Required</sup> <a name="QuotaName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName"></a>

```csharp
public string QuotaName { get; }
```

- *Type:* string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId"></a>

```csharp
public string RequestId { get; }
```

- *Type:* string

---

##### `RequestStatus`<sup>Required</sup> <a name="RequestStatus" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus"></a>

```csharp
public string RequestStatus { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `UsageMetric`<sup>Required</sup> <a name="UsageMetric" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.usageMetric"></a>

```csharp
public ServicequotasServiceQuotaUsageMetricList UsageMetric { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList">ServicequotasServiceQuotaUsageMetricList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QuotaCodeInput`<sup>Optional</sup> <a name="QuotaCodeInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput"></a>

```csharp
public string QuotaCodeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceCodeInput`<sup>Optional</sup> <a name="ServiceCodeInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput"></a>

```csharp
public string ServiceCodeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode"></a>

```csharp
public string QuotaCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode"></a>

```csharp
public string ServiceCode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasServiceQuotaConfig <a name="ServicequotasServiceQuotaConfig" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string QuotaCode,
    string ServiceCode,
    double Value,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode">QuotaCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode">ServiceCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode"></a>

```csharp
public string QuotaCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}.

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode"></a>

```csharp
public string ServiceCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/servicequotas_service_quota#region ServicequotasServiceQuota#region}

---

### ServicequotasServiceQuotaUsageMetric <a name="ServicequotasServiceQuotaUsageMetric" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaUsageMetric {

};
```


### ServicequotasServiceQuotaUsageMetricMetricDimensions <a name="ServicequotasServiceQuotaUsageMetricMetricDimensions" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaUsageMetricMetricDimensions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ServicequotasServiceQuotaUsageMetricList <a name="ServicequotasServiceQuotaUsageMetricList" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaUsageMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get"></a>

```csharp
private ServicequotasServiceQuotaUsageMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServicequotasServiceQuotaUsageMetricMetricDimensionsList <a name="ServicequotasServiceQuotaUsageMetricMetricDimensionsList" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaUsageMetricMetricDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get"></a>

```csharp
private ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference <a name="ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class">Class</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions">ServicequotasServiceQuotaUsageMetricMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Class`<sup>Required</sup> <a name="Class" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class"></a>

```csharp
public string Class { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue"></a>

```csharp
public ServicequotasServiceQuotaUsageMetricMetricDimensions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions">ServicequotasServiceQuotaUsageMetricMetricDimensions</a>

---


### ServicequotasServiceQuotaUsageMetricOutputReference <a name="ServicequotasServiceQuotaUsageMetricOutputReference" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasServiceQuotaUsageMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions">MetricDimensions</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList">ServicequotasServiceQuotaUsageMetricMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation">MetricStatisticRecommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric">ServicequotasServiceQuotaUsageMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricDimensions`<sup>Required</sup> <a name="MetricDimensions" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions"></a>

```csharp
public ServicequotasServiceQuotaUsageMetricMetricDimensionsList MetricDimensions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList">ServicequotasServiceQuotaUsageMetricMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; }
```

- *Type:* string

---

##### `MetricStatisticRecommendation`<sup>Required</sup> <a name="MetricStatisticRecommendation" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation"></a>

```csharp
public string MetricStatisticRecommendation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue"></a>

```csharp
public ServicequotasServiceQuotaUsageMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric">ServicequotasServiceQuotaUsageMetric</a>

---



