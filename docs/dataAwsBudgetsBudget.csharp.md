# `dataAwsBudgetsBudget` Submodule <a name="`dataAwsBudgetsBudget` Submodule" id="@cdktf/provider-aws.dataAwsBudgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBudgetsBudget <a name="DataAwsBudgetsBudget" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudget(Construct Scope, string Id, DataAwsBudgetsBudgetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig">DataAwsBudgetsBudgetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig">DataAwsBudgetsBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBudgetsBudget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBudgetsBudget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBudgetsBudget.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBudgetsBudget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBudgetsBudget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBudgetsBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBudgetsBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.autoAdjustData">AutoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList">DataAwsBudgetsBudgetAutoAdjustDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetExceeded">BudgetExceeded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetLimit">BudgetLimit</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList">DataAwsBudgetsBudgetBudgetLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetType">BudgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.calculatedSpend">CalculatedSpend</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList">DataAwsBudgetsBudgetCalculatedSpendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costFilter">CostFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList">DataAwsBudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costTypes">CostTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList">DataAwsBudgetsBudgetCostTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList">DataAwsBudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.plannedLimit">PlannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList">DataAwsBudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodEnd">TimePeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodStart">TimePeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoAdjustData`<sup>Required</sup> <a name="AutoAdjustData" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.autoAdjustData"></a>

```csharp
public DataAwsBudgetsBudgetAutoAdjustDataList AutoAdjustData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList">DataAwsBudgetsBudgetAutoAdjustDataList</a>

---

##### `BudgetExceeded`<sup>Required</sup> <a name="BudgetExceeded" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetExceeded"></a>

```csharp
public IResolvable BudgetExceeded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BudgetLimit`<sup>Required</sup> <a name="BudgetLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetLimit"></a>

```csharp
public DataAwsBudgetsBudgetBudgetLimitList BudgetLimit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList">DataAwsBudgetsBudgetBudgetLimitList</a>

---

##### `BudgetType`<sup>Required</sup> <a name="BudgetType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetType"></a>

```csharp
public string BudgetType { get; }
```

- *Type:* string

---

##### `CalculatedSpend`<sup>Required</sup> <a name="CalculatedSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.calculatedSpend"></a>

```csharp
public DataAwsBudgetsBudgetCalculatedSpendList CalculatedSpend { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList">DataAwsBudgetsBudgetCalculatedSpendList</a>

---

##### `CostFilter`<sup>Required</sup> <a name="CostFilter" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costFilter"></a>

```csharp
public DataAwsBudgetsBudgetCostFilterList CostFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList">DataAwsBudgetsBudgetCostFilterList</a>

---

##### `CostTypes`<sup>Required</sup> <a name="CostTypes" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costTypes"></a>

```csharp
public DataAwsBudgetsBudgetCostTypesList CostTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList">DataAwsBudgetsBudgetCostTypesList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.notification"></a>

```csharp
public DataAwsBudgetsBudgetNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList">DataAwsBudgetsBudgetNotificationList</a>

---

##### `PlannedLimit`<sup>Required</sup> <a name="PlannedLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.plannedLimit"></a>

```csharp
public DataAwsBudgetsBudgetPlannedLimitList PlannedLimit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList">DataAwsBudgetsBudgetPlannedLimitList</a>

---

##### `TimePeriodEnd`<sup>Required</sup> <a name="TimePeriodEnd" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodEnd"></a>

```csharp
public string TimePeriodEnd { get; }
```

- *Type:* string

---

##### `TimePeriodStart`<sup>Required</sup> <a name="TimePeriodStart" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodStart"></a>

```csharp
public string TimePeriodStart { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBudgetsBudgetAutoAdjustData <a name="DataAwsBudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetAutoAdjustData {

};
```


### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions {

};
```


### DataAwsBudgetsBudgetBudgetLimit <a name="DataAwsBudgetsBudgetBudgetLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetBudgetLimit {

};
```


### DataAwsBudgetsBudgetCalculatedSpend <a name="DataAwsBudgetsBudgetCalculatedSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCalculatedSpend {

};
```


### DataAwsBudgetsBudgetCalculatedSpendActualSpend <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCalculatedSpendActualSpend {

};
```


### DataAwsBudgetsBudgetConfig <a name="DataAwsBudgetsBudgetConfig" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AccountId = null,
    string Id = null,
    string NamePrefix = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}.

---

### DataAwsBudgetsBudgetCostFilter <a name="DataAwsBudgetsBudgetCostFilter" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCostFilter {

};
```


### DataAwsBudgetsBudgetCostTypes <a name="DataAwsBudgetsBudgetCostTypes" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCostTypes {

};
```


### DataAwsBudgetsBudgetNotification <a name="DataAwsBudgetsBudgetNotification" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetNotification {

};
```


### DataAwsBudgetsBudgetPlannedLimit <a name="DataAwsBudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetPlannedLimit {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get"></a>

```csharp
private DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">BudgetAdjustmentPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">LookbackAvailablePeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BudgetAdjustmentPeriod`<sup>Required</sup> <a name="BudgetAdjustmentPeriod" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```csharp
public double BudgetAdjustmentPeriod { get; }
```

- *Type:* double

---

##### `LookbackAvailablePeriods`<sup>Required</sup> <a name="LookbackAvailablePeriods" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```csharp
public double LookbackAvailablePeriods { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### DataAwsBudgetsBudgetAutoAdjustDataList <a name="DataAwsBudgetsBudgetAutoAdjustDataList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetAutoAdjustDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get"></a>

```csharp
private DataAwsBudgetsBudgetAutoAdjustDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetAutoAdjustDataOutputReference <a name="DataAwsBudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetAutoAdjustDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">AutoAdjustType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">HistoricalOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">LastAutoAdjustTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData">DataAwsBudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoAdjustType`<sup>Required</sup> <a name="AutoAdjustType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```csharp
public string AutoAdjustType { get; }
```

- *Type:* string

---

##### `HistoricalOptions`<sup>Required</sup> <a name="HistoricalOptions" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```csharp
public DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList HistoricalOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList</a>

---

##### `LastAutoAdjustTime`<sup>Required</sup> <a name="LastAutoAdjustTime" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```csharp
public string LastAutoAdjustTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetAutoAdjustData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData">DataAwsBudgetsBudgetAutoAdjustData</a>

---


### DataAwsBudgetsBudgetBudgetLimitList <a name="DataAwsBudgetsBudgetBudgetLimitList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetBudgetLimitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get"></a>

```csharp
private DataAwsBudgetsBudgetBudgetLimitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetBudgetLimitOutputReference <a name="DataAwsBudgetsBudgetBudgetLimitOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetBudgetLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.amount">Amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit">DataAwsBudgetsBudgetBudgetLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.amount"></a>

```csharp
public string Amount { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetBudgetLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit">DataAwsBudgetsBudgetBudgetLimit</a>

---


### DataAwsBudgetsBudgetCalculatedSpendActualSpendList <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpendList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCalculatedSpendActualSpendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get"></a>

```csharp
private DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.amount">Amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend">DataAwsBudgetsBudgetCalculatedSpendActualSpend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.amount"></a>

```csharp
public string Amount { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetCalculatedSpendActualSpend InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend">DataAwsBudgetsBudgetCalculatedSpendActualSpend</a>

---


### DataAwsBudgetsBudgetCalculatedSpendList <a name="DataAwsBudgetsBudgetCalculatedSpendList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCalculatedSpendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get"></a>

```csharp
private DataAwsBudgetsBudgetCalculatedSpendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetCalculatedSpendOutputReference <a name="DataAwsBudgetsBudgetCalculatedSpendOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCalculatedSpendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.actualSpend">ActualSpend</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList">DataAwsBudgetsBudgetCalculatedSpendActualSpendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend">DataAwsBudgetsBudgetCalculatedSpend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualSpend`<sup>Required</sup> <a name="ActualSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.actualSpend"></a>

```csharp
public DataAwsBudgetsBudgetCalculatedSpendActualSpendList ActualSpend { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList">DataAwsBudgetsBudgetCalculatedSpendActualSpendList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetCalculatedSpend InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend">DataAwsBudgetsBudgetCalculatedSpend</a>

---


### DataAwsBudgetsBudgetCostFilterList <a name="DataAwsBudgetsBudgetCostFilterList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCostFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get"></a>

```csharp
private DataAwsBudgetsBudgetCostFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetCostFilterOutputReference <a name="DataAwsBudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCostFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter">DataAwsBudgetsBudgetCostFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetCostFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter">DataAwsBudgetsBudgetCostFilter</a>

---


### DataAwsBudgetsBudgetCostTypesList <a name="DataAwsBudgetsBudgetCostTypesList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCostTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get"></a>

```csharp
private DataAwsBudgetsBudgetCostTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetCostTypesOutputReference <a name="DataAwsBudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetCostTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeCredit">IncludeCredit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeDiscount">IncludeDiscount</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">IncludeOtherSubscription</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRecurring">IncludeRecurring</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRefund">IncludeRefund</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSubscription">IncludeSubscription</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSupport">IncludeSupport</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeTax">IncludeTax</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeUpfront">IncludeUpfront</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useAmortized">UseAmortized</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useBlended">UseBlended</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes">DataAwsBudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeCredit`<sup>Required</sup> <a name="IncludeCredit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```csharp
public IResolvable IncludeCredit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeDiscount`<sup>Required</sup> <a name="IncludeDiscount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```csharp
public IResolvable IncludeDiscount { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeOtherSubscription`<sup>Required</sup> <a name="IncludeOtherSubscription" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```csharp
public IResolvable IncludeOtherSubscription { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeRecurring`<sup>Required</sup> <a name="IncludeRecurring" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```csharp
public IResolvable IncludeRecurring { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeRefund`<sup>Required</sup> <a name="IncludeRefund" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```csharp
public IResolvable IncludeRefund { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeSubscription`<sup>Required</sup> <a name="IncludeSubscription" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```csharp
public IResolvable IncludeSubscription { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeSupport`<sup>Required</sup> <a name="IncludeSupport" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```csharp
public IResolvable IncludeSupport { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeTax`<sup>Required</sup> <a name="IncludeTax" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```csharp
public IResolvable IncludeTax { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeUpfront`<sup>Required</sup> <a name="IncludeUpfront" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```csharp
public IResolvable IncludeUpfront { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UseAmortized`<sup>Required</sup> <a name="UseAmortized" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```csharp
public IResolvable UseAmortized { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UseBlended`<sup>Required</sup> <a name="UseBlended" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```csharp
public IResolvable UseBlended { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetCostTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes">DataAwsBudgetsBudgetCostTypes</a>

---


### DataAwsBudgetsBudgetNotificationList <a name="DataAwsBudgetsBudgetNotificationList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get"></a>

```csharp
private DataAwsBudgetsBudgetNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetNotificationOutputReference <a name="DataAwsBudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">SubscriberEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">SubscriberSnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification">DataAwsBudgetsBudgetNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

##### `SubscriberEmailAddresses`<sup>Required</sup> <a name="SubscriberEmailAddresses" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```csharp
public string[] SubscriberEmailAddresses { get; }
```

- *Type:* string[]

---

##### `SubscriberSnsTopicArns`<sup>Required</sup> <a name="SubscriberSnsTopicArns" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```csharp
public string[] SubscriberSnsTopicArns { get; }
```

- *Type:* string[]

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```csharp
public string ThresholdType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification">DataAwsBudgetsBudgetNotification</a>

---


### DataAwsBudgetsBudgetPlannedLimitList <a name="DataAwsBudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetPlannedLimitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get"></a>

```csharp
private DataAwsBudgetsBudgetPlannedLimitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBudgetsBudgetPlannedLimitOutputReference <a name="DataAwsBudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBudgetsBudgetPlannedLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.amount">Amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit">DataAwsBudgetsBudgetPlannedLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```csharp
public string Amount { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```csharp
public DataAwsBudgetsBudgetPlannedLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit">DataAwsBudgetsBudgetPlannedLimit</a>

---



