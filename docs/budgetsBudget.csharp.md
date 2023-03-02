# `budgetsBudget` Submodule <a name="`budgetsBudget` Submodule" id="@cdktf/provider-aws.budgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudget <a name="BudgetsBudget" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudget(Construct Scope, string Id, BudgetsBudgetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData">PutAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter">PutCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes">PutCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit">PutPlannedLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData">ResetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter">ResetCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters">ResetCostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes">ResetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount">ResetLimitAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit">ResetLimitUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit">ResetPlannedLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd">ResetTimePeriodEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart">ResetTimePeriodStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoAdjustData` <a name="PutAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData"></a>

```csharp
private void PutAutoAdjustData(BudgetsBudgetAutoAdjustData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `PutCostFilter` <a name="PutCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter"></a>

```csharp
private void PutCostFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter.parameter.value"></a>

- *Type:* object

---

##### `PutCostTypes` <a name="PutCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes"></a>

```csharp
private void PutCostTypes(BudgetsBudgetCostTypes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification"></a>

```csharp
private void PutNotification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification.parameter.value"></a>

- *Type:* object

---

##### `PutPlannedLimit` <a name="PutPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit"></a>

```csharp
private void PutPlannedLimit(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAutoAdjustData` <a name="ResetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData"></a>

```csharp
private void ResetAutoAdjustData()
```

##### `ResetCostFilter` <a name="ResetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter"></a>

```csharp
private void ResetCostFilter()
```

##### `ResetCostFilters` <a name="ResetCostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters"></a>

```csharp
private void ResetCostFilters()
```

##### `ResetCostTypes` <a name="ResetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes"></a>

```csharp
private void ResetCostTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimitAmount` <a name="ResetLimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount"></a>

```csharp
private void ResetLimitAmount()
```

##### `ResetLimitUnit` <a name="ResetLimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit"></a>

```csharp
private void ResetLimitUnit()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification"></a>

```csharp
private void ResetNotification()
```

##### `ResetPlannedLimit` <a name="ResetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit"></a>

```csharp
private void ResetPlannedLimit()
```

##### `ResetTimePeriodEnd` <a name="ResetTimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd"></a>

```csharp
private void ResetTimePeriodEnd()
```

##### `ResetTimePeriodStart` <a name="ResetTimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart"></a>

```csharp
private void ResetTimePeriodStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BudgetsBudget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BudgetsBudget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BudgetsBudget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData">AutoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter">CostFilter</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes">CostTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit">PlannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput">AutoAdjustDataInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput">BudgetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput">CostFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput">CostFiltersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput">CostTypesInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput">LimitAmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput">LimitUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput">NotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput">PlannedLimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput">TimePeriodEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput">TimePeriodStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType">BudgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters">CostFilters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount">LimitAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit">LimitUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd">TimePeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart">TimePeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoAdjustData`<sup>Required</sup> <a name="AutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData"></a>

```csharp
public BudgetsBudgetAutoAdjustDataOutputReference AutoAdjustData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a>

---

##### `CostFilter`<sup>Required</sup> <a name="CostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter"></a>

```csharp
public BudgetsBudgetCostFilterList CostFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a>

---

##### `CostTypes`<sup>Required</sup> <a name="CostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes"></a>

```csharp
public BudgetsBudgetCostTypesOutputReference CostTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification"></a>

```csharp
public BudgetsBudgetNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a>

---

##### `PlannedLimit`<sup>Required</sup> <a name="PlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit"></a>

```csharp
public BudgetsBudgetPlannedLimitList PlannedLimit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AutoAdjustDataInput`<sup>Optional</sup> <a name="AutoAdjustDataInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput"></a>

```csharp
public BudgetsBudgetAutoAdjustData AutoAdjustDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `BudgetTypeInput`<sup>Optional</sup> <a name="BudgetTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput"></a>

```csharp
public string BudgetTypeInput { get; }
```

- *Type:* string

---

##### `CostFilterInput`<sup>Optional</sup> <a name="CostFilterInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput"></a>

```csharp
public object CostFilterInput { get; }
```

- *Type:* object

---

##### `CostFiltersInput`<sup>Optional</sup> <a name="CostFiltersInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CostFiltersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CostTypesInput`<sup>Optional</sup> <a name="CostTypesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput"></a>

```csharp
public BudgetsBudgetCostTypes CostTypesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitAmountInput`<sup>Optional</sup> <a name="LimitAmountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput"></a>

```csharp
public string LimitAmountInput { get; }
```

- *Type:* string

---

##### `LimitUnitInput`<sup>Optional</sup> <a name="LimitUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput"></a>

```csharp
public string LimitUnitInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput"></a>

```csharp
public object NotificationInput { get; }
```

- *Type:* object

---

##### `PlannedLimitInput`<sup>Optional</sup> <a name="PlannedLimitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput"></a>

```csharp
public object PlannedLimitInput { get; }
```

- *Type:* object

---

##### `TimePeriodEndInput`<sup>Optional</sup> <a name="TimePeriodEndInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput"></a>

```csharp
public string TimePeriodEndInput { get; }
```

- *Type:* string

---

##### `TimePeriodStartInput`<sup>Optional</sup> <a name="TimePeriodStartInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput"></a>

```csharp
public string TimePeriodStartInput { get; }
```

- *Type:* string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BudgetType`<sup>Required</sup> <a name="BudgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType"></a>

```csharp
public string BudgetType { get; }
```

- *Type:* string

---

##### `CostFilters`<sup>Required</sup> <a name="CostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CostFilters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LimitAmount`<sup>Required</sup> <a name="LimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount"></a>

```csharp
public string LimitAmount { get; }
```

- *Type:* string

---

##### `LimitUnit`<sup>Required</sup> <a name="LimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit"></a>

```csharp
public string LimitUnit { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `TimePeriodEnd`<sup>Required</sup> <a name="TimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd"></a>

```csharp
public string TimePeriodEnd { get; }
```

- *Type:* string

---

##### `TimePeriodStart`<sup>Required</sup> <a name="TimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart"></a>

```csharp
public string TimePeriodStart { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetAutoAdjustData <a name="BudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetAutoAdjustData {
    string AutoAdjustType,
    BudgetsBudgetAutoAdjustDataHistoricalOptions HistoricalOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType">AutoAdjustType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions">HistoricalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | historical_options block. |

---

##### `AutoAdjustType`<sup>Required</sup> <a name="AutoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType"></a>

```csharp
public string AutoAdjustType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}.

---

##### `HistoricalOptions`<sup>Optional</sup> <a name="HistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions"></a>

```csharp
public BudgetsBudgetAutoAdjustDataHistoricalOptions HistoricalOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

historical_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#historical_options BudgetsBudget#historical_options}

---

### BudgetsBudgetAutoAdjustDataHistoricalOptions <a name="BudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetAutoAdjustDataHistoricalOptions {
    double BudgetAdjustmentPeriod
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod">BudgetAdjustmentPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}. |

---

##### `BudgetAdjustmentPeriod`<sup>Required</sup> <a name="BudgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod"></a>

```csharp
public double BudgetAdjustmentPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}.

---

### BudgetsBudgetConfig <a name="BudgetsBudgetConfig" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BudgetType,
    string TimeUnit,
    string AccountId = null,
    BudgetsBudgetAutoAdjustData AutoAdjustData = null,
    object CostFilter = null,
    System.Collections.Generic.IDictionary<string, string> CostFilters = null,
    BudgetsBudgetCostTypes CostTypes = null,
    string Id = null,
    string LimitAmount = null,
    string LimitUnit = null,
    string Name = null,
    string NamePrefix = null,
    object Notification = null,
    object PlannedLimit = null,
    string TimePeriodEnd = null,
    string TimePeriodStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType">BudgetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit">TimeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData">AutoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter">CostFilter</a></code> | <code>object</code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters">CostFilters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes">CostTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount">LimitAmount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit">LimitUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification">Notification</a></code> | <code>object</code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit">PlannedLimit</a></code> | <code>object</code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd">TimePeriodEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart">TimePeriodStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BudgetType`<sup>Required</sup> <a name="BudgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType"></a>

```csharp
public string BudgetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `AutoAdjustData`<sup>Optional</sup> <a name="AutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData"></a>

```csharp
public BudgetsBudgetAutoAdjustData AutoAdjustData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `CostFilter`<sup>Optional</sup> <a name="CostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter"></a>

```csharp
public object CostFilter { get; set; }
```

- *Type:* object

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `CostFilters`<sup>Optional</sup> <a name="CostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CostFilters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `CostTypes`<sup>Optional</sup> <a name="CostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes"></a>

```csharp
public BudgetsBudgetCostTypes CostTypes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LimitAmount`<sup>Optional</sup> <a name="LimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount"></a>

```csharp
public string LimitAmount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `LimitUnit`<sup>Optional</sup> <a name="LimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit"></a>

```csharp
public string LimitUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification"></a>

```csharp
public object Notification { get; set; }
```

- *Type:* object

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `PlannedLimit`<sup>Optional</sup> <a name="PlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit"></a>

```csharp
public object PlannedLimit { get; set; }
```

- *Type:* object

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `TimePeriodEnd`<sup>Optional</sup> <a name="TimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd"></a>

```csharp
public string TimePeriodEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `TimePeriodStart`<sup>Optional</sup> <a name="TimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart"></a>

```csharp
public string TimePeriodStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

### BudgetsBudgetCostFilter <a name="BudgetsBudgetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetCostFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}.

---

### BudgetsBudgetCostTypes <a name="BudgetsBudgetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetCostTypes {
    object IncludeCredit = null,
    object IncludeDiscount = null,
    object IncludeOtherSubscription = null,
    object IncludeRecurring = null,
    object IncludeRefund = null,
    object IncludeSubscription = null,
    object IncludeSupport = null,
    object IncludeTax = null,
    object IncludeUpfront = null,
    object UseAmortized = null,
    object UseBlended = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit">IncludeCredit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount">IncludeDiscount</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription">IncludeOtherSubscription</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring">IncludeRecurring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund">IncludeRefund</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription">IncludeSubscription</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport">IncludeSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax">IncludeTax</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront">IncludeUpfront</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized">UseAmortized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended">UseBlended</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}. |

---

##### `IncludeCredit`<sup>Optional</sup> <a name="IncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit"></a>

```csharp
public object IncludeCredit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

##### `IncludeDiscount`<sup>Optional</sup> <a name="IncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount"></a>

```csharp
public object IncludeDiscount { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

##### `IncludeOtherSubscription`<sup>Optional</sup> <a name="IncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription"></a>

```csharp
public object IncludeOtherSubscription { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

##### `IncludeRecurring`<sup>Optional</sup> <a name="IncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring"></a>

```csharp
public object IncludeRecurring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

##### `IncludeRefund`<sup>Optional</sup> <a name="IncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund"></a>

```csharp
public object IncludeRefund { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

##### `IncludeSubscription`<sup>Optional</sup> <a name="IncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription"></a>

```csharp
public object IncludeSubscription { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

##### `IncludeSupport`<sup>Optional</sup> <a name="IncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport"></a>

```csharp
public object IncludeSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}.

---

##### `IncludeTax`<sup>Optional</sup> <a name="IncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax"></a>

```csharp
public object IncludeTax { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

##### `IncludeUpfront`<sup>Optional</sup> <a name="IncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront"></a>

```csharp
public object IncludeUpfront { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

##### `UseAmortized`<sup>Optional</sup> <a name="UseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized"></a>

```csharp
public object UseAmortized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

##### `UseBlended`<sup>Optional</sup> <a name="UseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended"></a>

```csharp
public object UseBlended { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

### BudgetsBudgetNotification <a name="BudgetsBudgetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetNotification {
    string ComparisonOperator,
    string NotificationType,
    double Threshold,
    string ThresholdType,
    string[] SubscriberEmailAddresses = null,
    string[] SubscriberSnsTopicArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType">NotificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType">ThresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses">SubscriberEmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns">SubscriberSnsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}.

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType"></a>

```csharp
public string NotificationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}.

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType"></a>

```csharp
public string ThresholdType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}.

---

##### `SubscriberEmailAddresses`<sup>Optional</sup> <a name="SubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses"></a>

```csharp
public string[] SubscriberEmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.

---

##### `SubscriberSnsTopicArns`<sup>Optional</sup> <a name="SubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns"></a>

```csharp
public string[] SubscriberSnsTopicArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.

---

### BudgetsBudgetPlannedLimit <a name="BudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetPlannedLimit {
    string Amount,
    string StartTime,
    string Unit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount">Amount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}. |

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount"></a>

```csharp
public string Amount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}.

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">LookbackAvailablePeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput">BudgetAdjustmentPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">BudgetAdjustmentPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LookbackAvailablePeriods`<sup>Required</sup> <a name="LookbackAvailablePeriods" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```csharp
public double LookbackAvailablePeriods { get; }
```

- *Type:* double

---

##### `BudgetAdjustmentPeriodInput`<sup>Optional</sup> <a name="BudgetAdjustmentPeriodInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput"></a>

```csharp
public double BudgetAdjustmentPeriodInput { get; }
```

- *Type:* double

---

##### `BudgetAdjustmentPeriod`<sup>Required</sup> <a name="BudgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```csharp
public double BudgetAdjustmentPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetAutoAdjustDataHistoricalOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### BudgetsBudgetAutoAdjustDataOutputReference <a name="BudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetAutoAdjustDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions">PutHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions">ResetHistoricalOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHistoricalOptions` <a name="PutHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions"></a>

```csharp
private void PutHistoricalOptions(BudgetsBudgetAutoAdjustDataHistoricalOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `ResetHistoricalOptions` <a name="ResetHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions"></a>

```csharp
private void ResetHistoricalOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">HistoricalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">LastAutoAdjustTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput">AutoAdjustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput">HistoricalOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">AutoAdjustType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HistoricalOptions`<sup>Required</sup> <a name="HistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```csharp
public BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference HistoricalOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a>

---

##### `LastAutoAdjustTime`<sup>Required</sup> <a name="LastAutoAdjustTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```csharp
public string LastAutoAdjustTime { get; }
```

- *Type:* string

---

##### `AutoAdjustTypeInput`<sup>Optional</sup> <a name="AutoAdjustTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput"></a>

```csharp
public string AutoAdjustTypeInput { get; }
```

- *Type:* string

---

##### `HistoricalOptionsInput`<sup>Optional</sup> <a name="HistoricalOptionsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput"></a>

```csharp
public BudgetsBudgetAutoAdjustDataHistoricalOptions HistoricalOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `AutoAdjustType`<sup>Required</sup> <a name="AutoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```csharp
public string AutoAdjustType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetAutoAdjustData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---


### BudgetsBudgetCostFilterList <a name="BudgetsBudgetCostFilterList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetCostFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get"></a>

```csharp
private BudgetsBudgetCostFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BudgetsBudgetCostFilterOutputReference <a name="BudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetCostFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BudgetsBudgetCostTypesOutputReference <a name="BudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetCostTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit">ResetIncludeCredit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount">ResetIncludeDiscount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription">ResetIncludeOtherSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring">ResetIncludeRecurring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund">ResetIncludeRefund</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription">ResetIncludeSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport">ResetIncludeSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax">ResetIncludeTax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront">ResetIncludeUpfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized">ResetUseAmortized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended">ResetUseBlended</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeCredit` <a name="ResetIncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit"></a>

```csharp
private void ResetIncludeCredit()
```

##### `ResetIncludeDiscount` <a name="ResetIncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount"></a>

```csharp
private void ResetIncludeDiscount()
```

##### `ResetIncludeOtherSubscription` <a name="ResetIncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription"></a>

```csharp
private void ResetIncludeOtherSubscription()
```

##### `ResetIncludeRecurring` <a name="ResetIncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring"></a>

```csharp
private void ResetIncludeRecurring()
```

##### `ResetIncludeRefund` <a name="ResetIncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund"></a>

```csharp
private void ResetIncludeRefund()
```

##### `ResetIncludeSubscription` <a name="ResetIncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription"></a>

```csharp
private void ResetIncludeSubscription()
```

##### `ResetIncludeSupport` <a name="ResetIncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport"></a>

```csharp
private void ResetIncludeSupport()
```

##### `ResetIncludeTax` <a name="ResetIncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax"></a>

```csharp
private void ResetIncludeTax()
```

##### `ResetIncludeUpfront` <a name="ResetIncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront"></a>

```csharp
private void ResetIncludeUpfront()
```

##### `ResetUseAmortized` <a name="ResetUseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized"></a>

```csharp
private void ResetUseAmortized()
```

##### `ResetUseBlended` <a name="ResetUseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended"></a>

```csharp
private void ResetUseBlended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput">IncludeCreditInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput">IncludeDiscountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput">IncludeOtherSubscriptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput">IncludeRecurringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput">IncludeRefundInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput">IncludeSubscriptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput">IncludeSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput">IncludeTaxInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput">IncludeUpfrontInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput">UseAmortizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput">UseBlendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit">IncludeCredit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount">IncludeDiscount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">IncludeOtherSubscription</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring">IncludeRecurring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund">IncludeRefund</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription">IncludeSubscription</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport">IncludeSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax">IncludeTax</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront">IncludeUpfront</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized">UseAmortized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended">UseBlended</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeCreditInput`<sup>Optional</sup> <a name="IncludeCreditInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput"></a>

```csharp
public object IncludeCreditInput { get; }
```

- *Type:* object

---

##### `IncludeDiscountInput`<sup>Optional</sup> <a name="IncludeDiscountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput"></a>

```csharp
public object IncludeDiscountInput { get; }
```

- *Type:* object

---

##### `IncludeOtherSubscriptionInput`<sup>Optional</sup> <a name="IncludeOtherSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput"></a>

```csharp
public object IncludeOtherSubscriptionInput { get; }
```

- *Type:* object

---

##### `IncludeRecurringInput`<sup>Optional</sup> <a name="IncludeRecurringInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput"></a>

```csharp
public object IncludeRecurringInput { get; }
```

- *Type:* object

---

##### `IncludeRefundInput`<sup>Optional</sup> <a name="IncludeRefundInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput"></a>

```csharp
public object IncludeRefundInput { get; }
```

- *Type:* object

---

##### `IncludeSubscriptionInput`<sup>Optional</sup> <a name="IncludeSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput"></a>

```csharp
public object IncludeSubscriptionInput { get; }
```

- *Type:* object

---

##### `IncludeSupportInput`<sup>Optional</sup> <a name="IncludeSupportInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput"></a>

```csharp
public object IncludeSupportInput { get; }
```

- *Type:* object

---

##### `IncludeTaxInput`<sup>Optional</sup> <a name="IncludeTaxInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput"></a>

```csharp
public object IncludeTaxInput { get; }
```

- *Type:* object

---

##### `IncludeUpfrontInput`<sup>Optional</sup> <a name="IncludeUpfrontInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput"></a>

```csharp
public object IncludeUpfrontInput { get; }
```

- *Type:* object

---

##### `UseAmortizedInput`<sup>Optional</sup> <a name="UseAmortizedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput"></a>

```csharp
public object UseAmortizedInput { get; }
```

- *Type:* object

---

##### `UseBlendedInput`<sup>Optional</sup> <a name="UseBlendedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput"></a>

```csharp
public object UseBlendedInput { get; }
```

- *Type:* object

---

##### `IncludeCredit`<sup>Required</sup> <a name="IncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```csharp
public object IncludeCredit { get; }
```

- *Type:* object

---

##### `IncludeDiscount`<sup>Required</sup> <a name="IncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```csharp
public object IncludeDiscount { get; }
```

- *Type:* object

---

##### `IncludeOtherSubscription`<sup>Required</sup> <a name="IncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```csharp
public object IncludeOtherSubscription { get; }
```

- *Type:* object

---

##### `IncludeRecurring`<sup>Required</sup> <a name="IncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```csharp
public object IncludeRecurring { get; }
```

- *Type:* object

---

##### `IncludeRefund`<sup>Required</sup> <a name="IncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```csharp
public object IncludeRefund { get; }
```

- *Type:* object

---

##### `IncludeSubscription`<sup>Required</sup> <a name="IncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```csharp
public object IncludeSubscription { get; }
```

- *Type:* object

---

##### `IncludeSupport`<sup>Required</sup> <a name="IncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```csharp
public object IncludeSupport { get; }
```

- *Type:* object

---

##### `IncludeTax`<sup>Required</sup> <a name="IncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```csharp
public object IncludeTax { get; }
```

- *Type:* object

---

##### `IncludeUpfront`<sup>Required</sup> <a name="IncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```csharp
public object IncludeUpfront { get; }
```

- *Type:* object

---

##### `UseAmortized`<sup>Required</sup> <a name="UseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```csharp
public object UseAmortized { get; }
```

- *Type:* object

---

##### `UseBlended`<sup>Required</sup> <a name="UseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```csharp
public object UseBlended { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetCostTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---


### BudgetsBudgetNotificationList <a name="BudgetsBudgetNotificationList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get"></a>

```csharp
private BudgetsBudgetNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BudgetsBudgetNotificationOutputReference <a name="BudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses">ResetSubscriberEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns">ResetSubscriberSnsTopicArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriberEmailAddresses` <a name="ResetSubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses"></a>

```csharp
private void ResetSubscriberEmailAddresses()
```

##### `ResetSubscriberSnsTopicArns` <a name="ResetSubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns"></a>

```csharp
private void ResetSubscriberSnsTopicArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput">SubscriberEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput">SubscriberSnsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">SubscriberEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">SubscriberSnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput"></a>

```csharp
public string NotificationTypeInput { get; }
```

- *Type:* string

---

##### `SubscriberEmailAddressesInput`<sup>Optional</sup> <a name="SubscriberEmailAddressesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput"></a>

```csharp
public string[] SubscriberEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `SubscriberSnsTopicArnsInput`<sup>Optional</sup> <a name="SubscriberSnsTopicArnsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput"></a>

```csharp
public string[] SubscriberSnsTopicArnsInput { get; }
```

- *Type:* string[]

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput"></a>

```csharp
public string ThresholdTypeInput { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

##### `SubscriberEmailAddresses`<sup>Required</sup> <a name="SubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```csharp
public string[] SubscriberEmailAddresses { get; }
```

- *Type:* string[]

---

##### `SubscriberSnsTopicArns`<sup>Required</sup> <a name="SubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```csharp
public string[] SubscriberSnsTopicArns { get; }
```

- *Type:* string[]

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```csharp
public string ThresholdType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BudgetsBudgetPlannedLimitList <a name="BudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetPlannedLimitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get"></a>

```csharp
private BudgetsBudgetPlannedLimitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BudgetsBudgetPlannedLimitOutputReference <a name="BudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetPlannedLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput">AmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount">Amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput"></a>

```csharp
public string AmountInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```csharp
public string Amount { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



