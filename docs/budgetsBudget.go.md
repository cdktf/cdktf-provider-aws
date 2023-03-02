# `budgetsBudget` Submodule <a name="`budgetsBudget` Submodule" id="@cdktf/provider-aws.budgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudget <a name="BudgetsBudget" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudget(scope Construct, id *string, config BudgetsBudgetConfig) BudgetsBudget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoAdjustData` <a name="PutAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData"></a>

```go
func PutAutoAdjustData(value BudgetsBudgetAutoAdjustData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `PutCostFilter` <a name="PutCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter"></a>

```go
func PutCostFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCostTypes` <a name="PutCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes"></a>

```go
func PutCostTypes(value BudgetsBudgetCostTypes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlannedLimit` <a name="PutPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit"></a>

```go
func PutPlannedLimit(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAutoAdjustData` <a name="ResetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData"></a>

```go
func ResetAutoAdjustData()
```

##### `ResetCostFilter` <a name="ResetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter"></a>

```go
func ResetCostFilter()
```

##### `ResetCostFilters` <a name="ResetCostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters"></a>

```go
func ResetCostFilters()
```

##### `ResetCostTypes` <a name="ResetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes"></a>

```go
func ResetCostTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId"></a>

```go
func ResetId()
```

##### `ResetLimitAmount` <a name="ResetLimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount"></a>

```go
func ResetLimitAmount()
```

##### `ResetLimitUnit` <a name="ResetLimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit"></a>

```go
func ResetLimitUnit()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetPlannedLimit` <a name="ResetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit"></a>

```go
func ResetPlannedLimit()
```

##### `ResetTimePeriodEnd` <a name="ResetTimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd"></a>

```go
func ResetTimePeriodEnd()
```

##### `ResetTimePeriodStart` <a name="ResetTimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart"></a>

```go
func ResetTimePeriodStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.BudgetsBudget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.BudgetsBudget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.BudgetsBudget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData">AutoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter">CostFilter</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes">CostTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit">PlannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput">AutoAdjustDataInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput">BudgetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput">CostFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput">CostFiltersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput">CostTypesInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput">LimitAmountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput">LimitUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput">PlannedLimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput">TimePeriodEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput">TimePeriodStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput">TimeUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType">BudgetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters">CostFilters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount">LimitAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit">LimitUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd">TimePeriodEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart">TimePeriodStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoAdjustData`<sup>Required</sup> <a name="AutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData"></a>

```go
func AutoAdjustData() BudgetsBudgetAutoAdjustDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a>

---

##### `CostFilter`<sup>Required</sup> <a name="CostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter"></a>

```go
func CostFilter() BudgetsBudgetCostFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a>

---

##### `CostTypes`<sup>Required</sup> <a name="CostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes"></a>

```go
func CostTypes() BudgetsBudgetCostTypesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification"></a>

```go
func Notification() BudgetsBudgetNotificationList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a>

---

##### `PlannedLimit`<sup>Required</sup> <a name="PlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit"></a>

```go
func PlannedLimit() BudgetsBudgetPlannedLimitList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AutoAdjustDataInput`<sup>Optional</sup> <a name="AutoAdjustDataInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput"></a>

```go
func AutoAdjustDataInput() BudgetsBudgetAutoAdjustData
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `BudgetTypeInput`<sup>Optional</sup> <a name="BudgetTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput"></a>

```go
func BudgetTypeInput() *string
```

- *Type:* *string

---

##### `CostFilterInput`<sup>Optional</sup> <a name="CostFilterInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput"></a>

```go
func CostFilterInput() interface{}
```

- *Type:* interface{}

---

##### `CostFiltersInput`<sup>Optional</sup> <a name="CostFiltersInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput"></a>

```go
func CostFiltersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CostTypesInput`<sup>Optional</sup> <a name="CostTypesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput"></a>

```go
func CostTypesInput() BudgetsBudgetCostTypes
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitAmountInput`<sup>Optional</sup> <a name="LimitAmountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput"></a>

```go
func LimitAmountInput() *string
```

- *Type:* *string

---

##### `LimitUnitInput`<sup>Optional</sup> <a name="LimitUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput"></a>

```go
func LimitUnitInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `PlannedLimitInput`<sup>Optional</sup> <a name="PlannedLimitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput"></a>

```go
func PlannedLimitInput() interface{}
```

- *Type:* interface{}

---

##### `TimePeriodEndInput`<sup>Optional</sup> <a name="TimePeriodEndInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput"></a>

```go
func TimePeriodEndInput() *string
```

- *Type:* *string

---

##### `TimePeriodStartInput`<sup>Optional</sup> <a name="TimePeriodStartInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput"></a>

```go
func TimePeriodStartInput() *string
```

- *Type:* *string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput"></a>

```go
func TimeUnitInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BudgetType`<sup>Required</sup> <a name="BudgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType"></a>

```go
func BudgetType() *string
```

- *Type:* *string

---

##### `CostFilters`<sup>Required</sup> <a name="CostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters"></a>

```go
func CostFilters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LimitAmount`<sup>Required</sup> <a name="LimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount"></a>

```go
func LimitAmount() *string
```

- *Type:* *string

---

##### `LimitUnit`<sup>Required</sup> <a name="LimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit"></a>

```go
func LimitUnit() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `TimePeriodEnd`<sup>Required</sup> <a name="TimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd"></a>

```go
func TimePeriodEnd() *string
```

- *Type:* *string

---

##### `TimePeriodStart`<sup>Required</sup> <a name="TimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart"></a>

```go
func TimePeriodStart() *string
```

- *Type:* *string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit"></a>

```go
func TimeUnit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetAutoAdjustData <a name="BudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetAutoAdjustData {
	AutoAdjustType: *string,
	HistoricalOptions: github.com/cdktf/cdktf-provider-aws-go/aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType">AutoAdjustType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions">HistoricalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | historical_options block. |

---

##### `AutoAdjustType`<sup>Required</sup> <a name="AutoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType"></a>

```go
AutoAdjustType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}.

---

##### `HistoricalOptions`<sup>Optional</sup> <a name="HistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions"></a>

```go
HistoricalOptions BudgetsBudgetAutoAdjustDataHistoricalOptions
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

historical_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#historical_options BudgetsBudget#historical_options}

---

### BudgetsBudgetAutoAdjustDataHistoricalOptions <a name="BudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetAutoAdjustDataHistoricalOptions {
	BudgetAdjustmentPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod">BudgetAdjustmentPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}. |

---

##### `BudgetAdjustmentPeriod`<sup>Required</sup> <a name="BudgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod"></a>

```go
BudgetAdjustmentPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}.

---

### BudgetsBudgetConfig <a name="BudgetsBudgetConfig" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BudgetType: *string,
	TimeUnit: *string,
	AccountId: *string,
	AutoAdjustData: github.com/cdktf/cdktf-provider-aws-go/aws.budgetsBudget.BudgetsBudgetAutoAdjustData,
	CostFilter: interface{},
	CostFilters: *map[string]*string,
	CostTypes: github.com/cdktf/cdktf-provider-aws-go/aws.budgetsBudget.BudgetsBudgetCostTypes,
	Id: *string,
	LimitAmount: *string,
	LimitUnit: *string,
	Name: *string,
	NamePrefix: *string,
	Notification: interface{},
	PlannedLimit: interface{},
	TimePeriodEnd: *string,
	TimePeriodStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType">BudgetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData">AutoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter">CostFilter</a></code> | <code>interface{}</code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters">CostFilters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes">CostTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount">LimitAmount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit">LimitUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit">PlannedLimit</a></code> | <code>interface{}</code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd">TimePeriodEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart">TimePeriodStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BudgetType`<sup>Required</sup> <a name="BudgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType"></a>

```go
BudgetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit"></a>

```go
TimeUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `AutoAdjustData`<sup>Optional</sup> <a name="AutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData"></a>

```go
AutoAdjustData BudgetsBudgetAutoAdjustData
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `CostFilter`<sup>Optional</sup> <a name="CostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter"></a>

```go
CostFilter interface{}
```

- *Type:* interface{}

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `CostFilters`<sup>Optional</sup> <a name="CostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters"></a>

```go
CostFilters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `CostTypes`<sup>Optional</sup> <a name="CostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes"></a>

```go
CostTypes BudgetsBudgetCostTypes
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LimitAmount`<sup>Optional</sup> <a name="LimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount"></a>

```go
LimitAmount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `LimitUnit`<sup>Optional</sup> <a name="LimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit"></a>

```go
LimitUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `PlannedLimit`<sup>Optional</sup> <a name="PlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit"></a>

```go
PlannedLimit interface{}
```

- *Type:* interface{}

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `TimePeriodEnd`<sup>Optional</sup> <a name="TimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd"></a>

```go
TimePeriodEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `TimePeriodStart`<sup>Optional</sup> <a name="TimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart"></a>

```go
TimePeriodStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

### BudgetsBudgetCostFilter <a name="BudgetsBudgetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetCostFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}.

---

### BudgetsBudgetCostTypes <a name="BudgetsBudgetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetCostTypes {
	IncludeCredit: interface{},
	IncludeDiscount: interface{},
	IncludeOtherSubscription: interface{},
	IncludeRecurring: interface{},
	IncludeRefund: interface{},
	IncludeSubscription: interface{},
	IncludeSupport: interface{},
	IncludeTax: interface{},
	IncludeUpfront: interface{},
	UseAmortized: interface{},
	UseBlended: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit">IncludeCredit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount">IncludeDiscount</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription">IncludeOtherSubscription</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring">IncludeRecurring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund">IncludeRefund</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription">IncludeSubscription</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport">IncludeSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax">IncludeTax</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront">IncludeUpfront</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized">UseAmortized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended">UseBlended</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}. |

---

##### `IncludeCredit`<sup>Optional</sup> <a name="IncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit"></a>

```go
IncludeCredit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

##### `IncludeDiscount`<sup>Optional</sup> <a name="IncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount"></a>

```go
IncludeDiscount interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

##### `IncludeOtherSubscription`<sup>Optional</sup> <a name="IncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription"></a>

```go
IncludeOtherSubscription interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

##### `IncludeRecurring`<sup>Optional</sup> <a name="IncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring"></a>

```go
IncludeRecurring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

##### `IncludeRefund`<sup>Optional</sup> <a name="IncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund"></a>

```go
IncludeRefund interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

##### `IncludeSubscription`<sup>Optional</sup> <a name="IncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription"></a>

```go
IncludeSubscription interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

##### `IncludeSupport`<sup>Optional</sup> <a name="IncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport"></a>

```go
IncludeSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}.

---

##### `IncludeTax`<sup>Optional</sup> <a name="IncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax"></a>

```go
IncludeTax interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

##### `IncludeUpfront`<sup>Optional</sup> <a name="IncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront"></a>

```go
IncludeUpfront interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

##### `UseAmortized`<sup>Optional</sup> <a name="UseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized"></a>

```go
UseAmortized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

##### `UseBlended`<sup>Optional</sup> <a name="UseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended"></a>

```go
UseBlended interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

### BudgetsBudgetNotification <a name="BudgetsBudgetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetNotification {
	ComparisonOperator: *string,
	NotificationType: *string,
	Threshold: *f64,
	ThresholdType: *string,
	SubscriberEmailAddresses: *[]*string,
	SubscriberSnsTopicArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType">NotificationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses">SubscriberEmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns">SubscriberSnsTopicArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}.

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType"></a>

```go
NotificationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}.

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}.

---

##### `SubscriberEmailAddresses`<sup>Optional</sup> <a name="SubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses"></a>

```go
SubscriberEmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.

---

##### `SubscriberSnsTopicArns`<sup>Optional</sup> <a name="SubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns"></a>

```go
SubscriberSnsTopicArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.

---

### BudgetsBudgetPlannedLimit <a name="BudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

&budgetsbudget.BudgetsBudgetPlannedLimit {
	Amount: *string,
	StartTime: *string,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount">Amount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}. |

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount"></a>

```go
Amount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}.

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">LookbackAvailablePeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput">BudgetAdjustmentPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">BudgetAdjustmentPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LookbackAvailablePeriods`<sup>Required</sup> <a name="LookbackAvailablePeriods" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```go
func LookbackAvailablePeriods() *f64
```

- *Type:* *f64

---

##### `BudgetAdjustmentPeriodInput`<sup>Optional</sup> <a name="BudgetAdjustmentPeriodInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput"></a>

```go
func BudgetAdjustmentPeriodInput() *f64
```

- *Type:* *f64

---

##### `BudgetAdjustmentPeriod`<sup>Required</sup> <a name="BudgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```go
func BudgetAdjustmentPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BudgetsBudgetAutoAdjustDataHistoricalOptions
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### BudgetsBudgetAutoAdjustDataOutputReference <a name="BudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetAutoAdjustDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BudgetsBudgetAutoAdjustDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHistoricalOptions` <a name="PutHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions"></a>

```go
func PutHistoricalOptions(value BudgetsBudgetAutoAdjustDataHistoricalOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `ResetHistoricalOptions` <a name="ResetHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions"></a>

```go
func ResetHistoricalOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">HistoricalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">LastAutoAdjustTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput">AutoAdjustTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput">HistoricalOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">AutoAdjustType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HistoricalOptions`<sup>Required</sup> <a name="HistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```go
func HistoricalOptions() BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a>

---

##### `LastAutoAdjustTime`<sup>Required</sup> <a name="LastAutoAdjustTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```go
func LastAutoAdjustTime() *string
```

- *Type:* *string

---

##### `AutoAdjustTypeInput`<sup>Optional</sup> <a name="AutoAdjustTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput"></a>

```go
func AutoAdjustTypeInput() *string
```

- *Type:* *string

---

##### `HistoricalOptionsInput`<sup>Optional</sup> <a name="HistoricalOptionsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput"></a>

```go
func HistoricalOptionsInput() BudgetsBudgetAutoAdjustDataHistoricalOptions
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `AutoAdjustType`<sup>Required</sup> <a name="AutoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```go
func AutoAdjustType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```go
func InternalValue() BudgetsBudgetAutoAdjustData
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---


### BudgetsBudgetCostFilterList <a name="BudgetsBudgetCostFilterList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetCostFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BudgetsBudgetCostFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get"></a>

```go
func Get(index *f64) BudgetsBudgetCostFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BudgetsBudgetCostFilterOutputReference <a name="BudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetCostFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BudgetsBudgetCostFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BudgetsBudgetCostTypesOutputReference <a name="BudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetCostTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BudgetsBudgetCostTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeCredit` <a name="ResetIncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit"></a>

```go
func ResetIncludeCredit()
```

##### `ResetIncludeDiscount` <a name="ResetIncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount"></a>

```go
func ResetIncludeDiscount()
```

##### `ResetIncludeOtherSubscription` <a name="ResetIncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription"></a>

```go
func ResetIncludeOtherSubscription()
```

##### `ResetIncludeRecurring` <a name="ResetIncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring"></a>

```go
func ResetIncludeRecurring()
```

##### `ResetIncludeRefund` <a name="ResetIncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund"></a>

```go
func ResetIncludeRefund()
```

##### `ResetIncludeSubscription` <a name="ResetIncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription"></a>

```go
func ResetIncludeSubscription()
```

##### `ResetIncludeSupport` <a name="ResetIncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport"></a>

```go
func ResetIncludeSupport()
```

##### `ResetIncludeTax` <a name="ResetIncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax"></a>

```go
func ResetIncludeTax()
```

##### `ResetIncludeUpfront` <a name="ResetIncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront"></a>

```go
func ResetIncludeUpfront()
```

##### `ResetUseAmortized` <a name="ResetUseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized"></a>

```go
func ResetUseAmortized()
```

##### `ResetUseBlended` <a name="ResetUseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended"></a>

```go
func ResetUseBlended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput">IncludeCreditInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput">IncludeDiscountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput">IncludeOtherSubscriptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput">IncludeRecurringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput">IncludeRefundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput">IncludeSubscriptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput">IncludeSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput">IncludeTaxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput">IncludeUpfrontInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput">UseAmortizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput">UseBlendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit">IncludeCredit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount">IncludeDiscount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">IncludeOtherSubscription</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring">IncludeRecurring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund">IncludeRefund</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription">IncludeSubscription</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport">IncludeSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax">IncludeTax</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront">IncludeUpfront</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized">UseAmortized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended">UseBlended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeCreditInput`<sup>Optional</sup> <a name="IncludeCreditInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput"></a>

```go
func IncludeCreditInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDiscountInput`<sup>Optional</sup> <a name="IncludeDiscountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput"></a>

```go
func IncludeDiscountInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeOtherSubscriptionInput`<sup>Optional</sup> <a name="IncludeOtherSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput"></a>

```go
func IncludeOtherSubscriptionInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeRecurringInput`<sup>Optional</sup> <a name="IncludeRecurringInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput"></a>

```go
func IncludeRecurringInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeRefundInput`<sup>Optional</sup> <a name="IncludeRefundInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput"></a>

```go
func IncludeRefundInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeSubscriptionInput`<sup>Optional</sup> <a name="IncludeSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput"></a>

```go
func IncludeSubscriptionInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeSupportInput`<sup>Optional</sup> <a name="IncludeSupportInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput"></a>

```go
func IncludeSupportInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeTaxInput`<sup>Optional</sup> <a name="IncludeTaxInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput"></a>

```go
func IncludeTaxInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeUpfrontInput`<sup>Optional</sup> <a name="IncludeUpfrontInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput"></a>

```go
func IncludeUpfrontInput() interface{}
```

- *Type:* interface{}

---

##### `UseAmortizedInput`<sup>Optional</sup> <a name="UseAmortizedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput"></a>

```go
func UseAmortizedInput() interface{}
```

- *Type:* interface{}

---

##### `UseBlendedInput`<sup>Optional</sup> <a name="UseBlendedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput"></a>

```go
func UseBlendedInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeCredit`<sup>Required</sup> <a name="IncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```go
func IncludeCredit() interface{}
```

- *Type:* interface{}

---

##### `IncludeDiscount`<sup>Required</sup> <a name="IncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```go
func IncludeDiscount() interface{}
```

- *Type:* interface{}

---

##### `IncludeOtherSubscription`<sup>Required</sup> <a name="IncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```go
func IncludeOtherSubscription() interface{}
```

- *Type:* interface{}

---

##### `IncludeRecurring`<sup>Required</sup> <a name="IncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```go
func IncludeRecurring() interface{}
```

- *Type:* interface{}

---

##### `IncludeRefund`<sup>Required</sup> <a name="IncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```go
func IncludeRefund() interface{}
```

- *Type:* interface{}

---

##### `IncludeSubscription`<sup>Required</sup> <a name="IncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```go
func IncludeSubscription() interface{}
```

- *Type:* interface{}

---

##### `IncludeSupport`<sup>Required</sup> <a name="IncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```go
func IncludeSupport() interface{}
```

- *Type:* interface{}

---

##### `IncludeTax`<sup>Required</sup> <a name="IncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```go
func IncludeTax() interface{}
```

- *Type:* interface{}

---

##### `IncludeUpfront`<sup>Required</sup> <a name="IncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```go
func IncludeUpfront() interface{}
```

- *Type:* interface{}

---

##### `UseAmortized`<sup>Required</sup> <a name="UseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```go
func UseAmortized() interface{}
```

- *Type:* interface{}

---

##### `UseBlended`<sup>Required</sup> <a name="UseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```go
func UseBlended() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() BudgetsBudgetCostTypes
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---


### BudgetsBudgetNotificationList <a name="BudgetsBudgetNotificationList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BudgetsBudgetNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get"></a>

```go
func Get(index *f64) BudgetsBudgetNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BudgetsBudgetNotificationOutputReference <a name="BudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BudgetsBudgetNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriberEmailAddresses` <a name="ResetSubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses"></a>

```go
func ResetSubscriberEmailAddresses()
```

##### `ResetSubscriberSnsTopicArns` <a name="ResetSubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns"></a>

```go
func ResetSubscriberSnsTopicArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput">SubscriberEmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput">SubscriberSnsTopicArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType">NotificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">SubscriberEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">SubscriberSnsTopicArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput"></a>

```go
func NotificationTypeInput() *string
```

- *Type:* *string

---

##### `SubscriberEmailAddressesInput`<sup>Optional</sup> <a name="SubscriberEmailAddressesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput"></a>

```go
func SubscriberEmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubscriberSnsTopicArnsInput`<sup>Optional</sup> <a name="SubscriberSnsTopicArnsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput"></a>

```go
func SubscriberSnsTopicArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```go
func NotificationType() *string
```

- *Type:* *string

---

##### `SubscriberEmailAddresses`<sup>Required</sup> <a name="SubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```go
func SubscriberEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SubscriberSnsTopicArns`<sup>Required</sup> <a name="SubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```go
func SubscriberSnsTopicArns() *[]*string
```

- *Type:* *[]*string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BudgetsBudgetPlannedLimitList <a name="BudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetPlannedLimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BudgetsBudgetPlannedLimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get"></a>

```go
func Get(index *f64) BudgetsBudgetPlannedLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BudgetsBudgetPlannedLimitOutputReference <a name="BudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/budgetsbudget"

budgetsbudget.NewBudgetsBudgetPlannedLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BudgetsBudgetPlannedLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput">AmountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount">Amount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput"></a>

```go
func AmountInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```go
func Amount() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



