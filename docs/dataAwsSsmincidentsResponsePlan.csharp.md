# `dataAwsSsmincidentsResponsePlan` Submodule <a name="`dataAwsSsmincidentsResponsePlan` Submodule" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmincidentsResponsePlan <a name="DataAwsSsmincidentsResponsePlan" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan aws_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlan(Construct Scope, string Id, DataAwsSsmincidentsResponsePlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig">DataAwsSsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig">DataAwsSsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmincidentsResponsePlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmincidentsResponsePlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmincidentsResponsePlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmincidentsResponsePlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmincidentsResponsePlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList">DataAwsSsmincidentsResponsePlanActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.chatChannel">ChatChannel</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.engagements">Engagements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList">DataAwsSsmincidentsResponsePlanIncidentTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.integration">Integration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList">DataAwsSsmincidentsResponsePlanIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.action"></a>

```csharp
public DataAwsSsmincidentsResponsePlanActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList">DataAwsSsmincidentsResponsePlanActionList</a>

---

##### `ChatChannel`<sup>Required</sup> <a name="ChatChannel" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.chatChannel"></a>

```csharp
public string[] ChatChannel { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Engagements`<sup>Required</sup> <a name="Engagements" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.engagements"></a>

```csharp
public string[] Engagements { get; }
```

- *Type:* string[]

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.incidentTemplate"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIncidentTemplateList IncidentTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList">DataAwsSsmincidentsResponsePlanIncidentTemplateList</a>

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.integration"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIntegrationList Integration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList">DataAwsSsmincidentsResponsePlanIntegrationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmincidentsResponsePlanAction <a name="DataAwsSsmincidentsResponsePlanAction" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanAction {

};
```


### DataAwsSsmincidentsResponsePlanActionSsmAutomation <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomation" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionSsmAutomation {

};
```


### DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter {

};
```


### DataAwsSsmincidentsResponsePlanConfig <a name="DataAwsSsmincidentsResponsePlanConfig" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#arn DataAwsSsmincidentsResponsePlan#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#id DataAwsSsmincidentsResponsePlan#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#tags DataAwsSsmincidentsResponsePlan#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#arn DataAwsSsmincidentsResponsePlan#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#id DataAwsSsmincidentsResponsePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmincidents_response_plan#tags DataAwsSsmincidentsResponsePlan#tags}.

---

### DataAwsSsmincidentsResponsePlanIncidentTemplate <a name="DataAwsSsmincidentsResponsePlanIncidentTemplate" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIncidentTemplate {

};
```


### DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget {

};
```


### DataAwsSsmincidentsResponsePlanIntegration <a name="DataAwsSsmincidentsResponsePlanIntegration" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIntegration {

};
```


### DataAwsSsmincidentsResponsePlanIntegrationPagerduty <a name="DataAwsSsmincidentsResponsePlanIntegrationPagerduty" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIntegrationPagerduty {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmincidentsResponsePlanActionList <a name="DataAwsSsmincidentsResponsePlanActionList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanActionOutputReference <a name="DataAwsSsmincidentsResponsePlanActionOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.ssmAutomation">SsmAutomation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList">DataAwsSsmincidentsResponsePlanActionSsmAutomationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction">DataAwsSsmincidentsResponsePlanAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SsmAutomation`<sup>Required</sup> <a name="SsmAutomation" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.ssmAutomation"></a>

```csharp
public DataAwsSsmincidentsResponsePlanActionSsmAutomationList SsmAutomation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList">DataAwsSsmincidentsResponsePlanActionSsmAutomationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction">DataAwsSsmincidentsResponsePlanAction</a>

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationList <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionSsmAutomationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName">DocumentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters">DynamicParameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount">TargetAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation">DataAwsSsmincidentsResponsePlanActionSsmAutomation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName"></a>

```csharp
public string DocumentName { get; }
```

- *Type:* string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; }
```

- *Type:* string

---

##### `DynamicParameters`<sup>Required</sup> <a name="DynamicParameters" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters"></a>

```csharp
public StringMap DynamicParameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter"></a>

```csharp
public DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TargetAccount`<sup>Required</sup> <a name="TargetAccount" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount"></a>

```csharp
public string TargetAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanActionSsmAutomation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation">DataAwsSsmincidentsResponsePlanActionSsmAutomation</a>

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter</a>

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateList <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIncidentTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">DedupeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">Impact</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">IncidentTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget">NotificationTarget</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate">DataAwsSsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DedupeString`<sup>Required</sup> <a name="DedupeString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```csharp
public string DedupeString { get; }
```

- *Type:* string

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```csharp
public double Impact { get; }
```

- *Type:* double

---

##### `IncidentTags`<sup>Required</sup> <a name="IncidentTags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```csharp
public StringMap IncidentTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList NotificationTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a>

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIncidentTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate">DataAwsSsmincidentsResponsePlanIncidentTemplate</a>

---


### DataAwsSsmincidentsResponsePlanIntegrationList <a name="DataAwsSsmincidentsResponsePlanIntegrationList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIntegrationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanIntegrationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIntegrationOutputReference <a name="DataAwsSsmincidentsResponsePlanIntegrationOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList">DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration">DataAwsSsmincidentsResponsePlanIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList Pagerduty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList">DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIntegration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration">DataAwsSsmincidentsResponsePlanIntegration</a>

---


### DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList <a name="DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.get"></a>

```csharp
private DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference <a name="DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty">DataAwsSsmincidentsResponsePlanIntegrationPagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmincidentsResponsePlanIntegrationPagerduty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty">DataAwsSsmincidentsResponsePlanIntegrationPagerduty</a>

---



