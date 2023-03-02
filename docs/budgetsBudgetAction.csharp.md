# `budgetsBudgetAction` Submodule <a name="`budgetsBudgetAction` Submodule" id="@cdktf/provider-aws.budgetsBudgetAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetAction <a name="BudgetsBudgetAction" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action aws_budgets_budget_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetAction(Construct Scope, string Id, BudgetsBudgetActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig">BudgetsBudgetActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig">BudgetsBudgetActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold">PutActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber">PutSubscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutActionThreshold` <a name="PutActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold"></a>

```csharp
private void PutActionThreshold(BudgetsBudgetActionActionThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition"></a>

```csharp
private void PutDefinition(BudgetsBudgetActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---

##### `PutSubscriber` <a name="PutSubscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber"></a>

```csharp
private void PutSubscriber(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BudgetsBudgetAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BudgetsBudgetAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BudgetsBudgetAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThreshold">ActionThreshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference">BudgetsBudgetActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference">BudgetsBudgetActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriber">Subscriber</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList">BudgetsBudgetActionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThresholdInput">ActionThresholdInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModelInput">ApprovalModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetNameInput">BudgetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definitionInput">DefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriberInput">SubscriberInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModel">ApprovalModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetName">BudgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `ActionThreshold`<sup>Required</sup> <a name="ActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThreshold"></a>

```csharp
public BudgetsBudgetActionActionThresholdOutputReference ActionThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference">BudgetsBudgetActionActionThresholdOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definition"></a>

```csharp
public BudgetsBudgetActionDefinitionOutputReference Definition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference">BudgetsBudgetActionDefinitionOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Subscriber`<sup>Required</sup> <a name="Subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriber"></a>

```csharp
public BudgetsBudgetActionSubscriberList Subscriber { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList">BudgetsBudgetActionSubscriberList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActionThresholdInput`<sup>Optional</sup> <a name="ActionThresholdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThresholdInput"></a>

```csharp
public BudgetsBudgetActionActionThreshold ActionThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `ApprovalModelInput`<sup>Optional</sup> <a name="ApprovalModelInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModelInput"></a>

```csharp
public string ApprovalModelInput { get; }
```

- *Type:* string

---

##### `BudgetNameInput`<sup>Optional</sup> <a name="BudgetNameInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetNameInput"></a>

```csharp
public string BudgetNameInput { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definitionInput"></a>

```csharp
public BudgetsBudgetActionDefinition DefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationTypeInput"></a>

```csharp
public string NotificationTypeInput { get; }
```

- *Type:* string

---

##### `SubscriberInput`<sup>Optional</sup> <a name="SubscriberInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriberInput"></a>

```csharp
public object SubscriberInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `ApprovalModel`<sup>Required</sup> <a name="ApprovalModel" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModel"></a>

```csharp
public string ApprovalModel { get; }
```

- *Type:* string

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetName"></a>

```csharp
public string BudgetName { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetActionActionThreshold <a name="BudgetsBudgetActionActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionActionThreshold {
    string ActionThresholdType,
    double ActionThresholdValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdType">ActionThresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdValue">ActionThresholdValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}. |

---

##### `ActionThresholdType`<sup>Required</sup> <a name="ActionThresholdType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdType"></a>

```csharp
public string ActionThresholdType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}.

---

##### `ActionThresholdValue`<sup>Required</sup> <a name="ActionThresholdValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdValue"></a>

```csharp
public double ActionThresholdValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}.

---

### BudgetsBudgetActionConfig <a name="BudgetsBudgetActionConfig" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BudgetsBudgetActionActionThreshold ActionThreshold,
    string ActionType,
    string ApprovalModel,
    string BudgetName,
    BudgetsBudgetActionDefinition Definition,
    string ExecutionRoleArn,
    string NotificationType,
    object Subscriber,
    string AccountId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionThreshold">ActionThreshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | action_threshold block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.approvalModel">ApprovalModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.budgetName">BudgetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.notificationType">NotificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.subscriber">Subscriber</a></code> | <code>object</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionThreshold`<sup>Required</sup> <a name="ActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionThreshold"></a>

```csharp
public BudgetsBudgetActionActionThreshold ActionThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

action_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold BudgetsBudgetAction#action_threshold}

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}.

---

##### `ApprovalModel`<sup>Required</sup> <a name="ApprovalModel" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.approvalModel"></a>

```csharp
public string ApprovalModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}.

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.budgetName"></a>

```csharp
public string BudgetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}.

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.definition"></a>

```csharp
public BudgetsBudgetActionDefinition Definition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#definition BudgetsBudgetAction#definition}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}.

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.notificationType"></a>

```csharp
public string NotificationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}.

---

##### `Subscriber`<sup>Required</sup> <a name="Subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.subscriber"></a>

```csharp
public object Subscriber { get; set; }
```

- *Type:* object

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscriber BudgetsBudgetAction#subscriber}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BudgetsBudgetActionDefinition <a name="BudgetsBudgetActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinition {
    BudgetsBudgetActionDefinitionIamActionDefinition IamActionDefinition = null,
    BudgetsBudgetActionDefinitionScpActionDefinition ScpActionDefinition = null,
    BudgetsBudgetActionDefinitionSsmActionDefinition SsmActionDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.iamActionDefinition">IamActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | iam_action_definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.scpActionDefinition">ScpActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | scp_action_definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.ssmActionDefinition">SsmActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | ssm_action_definition block. |

---

##### `IamActionDefinition`<sup>Optional</sup> <a name="IamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.iamActionDefinition"></a>

```csharp
public BudgetsBudgetActionDefinitionIamActionDefinition IamActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

iam_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#iam_action_definition BudgetsBudgetAction#iam_action_definition}

---

##### `ScpActionDefinition`<sup>Optional</sup> <a name="ScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.scpActionDefinition"></a>

```csharp
public BudgetsBudgetActionDefinitionScpActionDefinition ScpActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

scp_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#scp_action_definition BudgetsBudgetAction#scp_action_definition}

---

##### `SsmActionDefinition`<sup>Optional</sup> <a name="SsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.ssmActionDefinition"></a>

```csharp
public BudgetsBudgetActionDefinitionSsmActionDefinition SsmActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

ssm_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}

---

### BudgetsBudgetActionDefinitionIamActionDefinition <a name="BudgetsBudgetActionDefinitionIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionIamActionDefinition {
    string PolicyArn,
    string[] Groups = null,
    string[] Roles = null,
    string[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.policyArn">PolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.roles">Roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.users">Users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}. |

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}.

---

### BudgetsBudgetActionDefinitionScpActionDefinition <a name="BudgetsBudgetActionDefinitionScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionScpActionDefinition {
    string PolicyId,
    string[] TargetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.targetIds">TargetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}. |

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}.

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.targetIds"></a>

```csharp
public string[] TargetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}.

---

### BudgetsBudgetActionDefinitionSsmActionDefinition <a name="BudgetsBudgetActionDefinitionSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionSsmActionDefinition {
    string ActionSubType,
    string[] InstanceIds,
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.actionSubType">ActionSubType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.instanceIds">InstanceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}. |

---

##### `ActionSubType`<sup>Required</sup> <a name="ActionSubType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.actionSubType"></a>

```csharp
public string ActionSubType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}.

---

##### `InstanceIds`<sup>Required</sup> <a name="InstanceIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```csharp
public string[] InstanceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}.

---

### BudgetsBudgetActionSubscriber <a name="BudgetsBudgetActionSubscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionSubscriber {
    string Address,
    string SubscriptionType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}.

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetActionActionThresholdOutputReference <a name="BudgetsBudgetActionActionThresholdOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionActionThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdTypeInput">ActionThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValueInput">ActionThresholdValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdType">ActionThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValue">ActionThresholdValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionThresholdTypeInput`<sup>Optional</sup> <a name="ActionThresholdTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdTypeInput"></a>

```csharp
public string ActionThresholdTypeInput { get; }
```

- *Type:* string

---

##### `ActionThresholdValueInput`<sup>Optional</sup> <a name="ActionThresholdValueInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValueInput"></a>

```csharp
public double ActionThresholdValueInput { get; }
```

- *Type:* double

---

##### `ActionThresholdType`<sup>Required</sup> <a name="ActionThresholdType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdType"></a>

```csharp
public string ActionThresholdType { get; }
```

- *Type:* string

---

##### `ActionThresholdValue`<sup>Required</sup> <a name="ActionThresholdValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValue"></a>

```csharp
public double ActionThresholdValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetActionActionThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---


### BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetActionDefinitionIamActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition">PutIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition">PutScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition">PutSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetIamActionDefinition">ResetIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetScpActionDefinition">ResetScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetSsmActionDefinition">ResetSsmActionDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamActionDefinition` <a name="PutIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition"></a>

```csharp
private void PutIamActionDefinition(BudgetsBudgetActionDefinitionIamActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---

##### `PutScpActionDefinition` <a name="PutScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition"></a>

```csharp
private void PutScpActionDefinition(BudgetsBudgetActionDefinitionScpActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---

##### `PutSsmActionDefinition` <a name="PutSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition"></a>

```csharp
private void PutSsmActionDefinition(BudgetsBudgetActionDefinitionSsmActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---

##### `ResetIamActionDefinition` <a name="ResetIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetIamActionDefinition"></a>

```csharp
private void ResetIamActionDefinition()
```

##### `ResetScpActionDefinition` <a name="ResetScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetScpActionDefinition"></a>

```csharp
private void ResetScpActionDefinition()
```

##### `ResetSsmActionDefinition` <a name="ResetSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```csharp
private void ResetSsmActionDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinition">IamActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinition">ScpActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinition">SsmActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinitionInput">IamActionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinitionInput">ScpActionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinitionInput">SsmActionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamActionDefinition`<sup>Required</sup> <a name="IamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinition"></a>

```csharp
public BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference IamActionDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `ScpActionDefinition`<sup>Required</sup> <a name="ScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinition"></a>

```csharp
public BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference ScpActionDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `SsmActionDefinition`<sup>Required</sup> <a name="SsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```csharp
public BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference SsmActionDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `IamActionDefinitionInput`<sup>Optional</sup> <a name="IamActionDefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```csharp
public BudgetsBudgetActionDefinitionIamActionDefinition IamActionDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---

##### `ScpActionDefinitionInput`<sup>Optional</sup> <a name="ScpActionDefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```csharp
public BudgetsBudgetActionDefinitionScpActionDefinition ScpActionDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---

##### `SsmActionDefinitionInput`<sup>Optional</sup> <a name="SsmActionDefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```csharp
public BudgetsBudgetActionDefinitionSsmActionDefinition SsmActionDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---


### BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">TargetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```csharp
public string[] TargetIdsInput { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetActionDefinitionScpActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubTypeInput">ActionSubTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">InstanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubType">ActionSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">InstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionSubTypeInput`<sup>Optional</sup> <a name="ActionSubTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubTypeInput"></a>

```csharp
public string ActionSubTypeInput { get; }
```

- *Type:* string

---

##### `InstanceIdsInput`<sup>Optional</sup> <a name="InstanceIdsInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```csharp
public string[] InstanceIdsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ActionSubType`<sup>Required</sup> <a name="ActionSubType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubType"></a>

```csharp
public string ActionSubType { get; }
```

- *Type:* string

---

##### `InstanceIds`<sup>Required</sup> <a name="InstanceIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```csharp
public string[] InstanceIds { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public BudgetsBudgetActionDefinitionSsmActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetActionSubscriberList <a name="BudgetsBudgetActionSubscriberList" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionSubscriberList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get"></a>

```csharp
private BudgetsBudgetActionSubscriberOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BudgetsBudgetActionSubscriberOutputReference <a name="BudgetsBudgetActionSubscriberOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BudgetsBudgetActionSubscriberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionTypeInput"></a>

```csharp
public string SubscriptionTypeInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



