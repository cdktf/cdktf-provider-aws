# `aws_servicequotas_template`

Refer to the Terraform Registory for docs: [`aws_servicequotas_template`](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template).

# `servicequotasTemplate` Submodule <a name="`servicequotasTemplate` Submodule" id="@cdktf/provider-aws.servicequotasTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasTemplate <a name="ServicequotasTemplate" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template aws_servicequotas_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasTemplate(Construct Scope, string Id, ServicequotasTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig">ServicequotasTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig">ServicequotasTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicequotasTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicequotasTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicequotasTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicequotasTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicequotasTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicequotasTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.globalQuota">GlobalQuota</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.quotaName">QuotaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.quotaCodeInput">QuotaCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.serviceCodeInput">ServiceCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.quotaCode">QuotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.serviceCode">ServiceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.value">Value</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GlobalQuota`<sup>Required</sup> <a name="GlobalQuota" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.globalQuota"></a>

```csharp
public IResolvable GlobalQuota { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QuotaName`<sup>Required</sup> <a name="QuotaName" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.quotaName"></a>

```csharp
public string QuotaName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `QuotaCodeInput`<sup>Optional</sup> <a name="QuotaCodeInput" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.quotaCodeInput"></a>

```csharp
public string QuotaCodeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceCodeInput`<sup>Optional</sup> <a name="ServiceCodeInput" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.serviceCodeInput"></a>

```csharp
public string ServiceCodeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.quotaCode"></a>

```csharp
public string QuotaCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.serviceCode"></a>

```csharp
public string ServiceCode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasTemplateConfig <a name="ServicequotasTemplateConfig" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicequotasTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string QuotaCode,
    string Region,
    string ServiceCode,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.quotaCode">QuotaCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#quota_code ServicequotasTemplate#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#region ServicequotasTemplate#region}. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.serviceCode">ServiceCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#service_code ServicequotasTemplate#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#value ServicequotasTemplate#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.quotaCode"></a>

```csharp
public string QuotaCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#quota_code ServicequotasTemplate#quota_code}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#region ServicequotasTemplate#region}.

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.serviceCode"></a>

```csharp
public string ServiceCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#service_code ServicequotasTemplate#service_code}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicequotasTemplate.ServicequotasTemplateConfig.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/servicequotas_template#value ServicequotasTemplate#value}.

---



