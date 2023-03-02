# `budgetsBudget` Submodule <a name="`budgetsBudget` Submodule" id="@cdktf/provider-aws.budgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudget <a name="BudgetsBudget" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudget;

BudgetsBudget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .budgetType(java.lang.String)
    .timeUnit(java.lang.String)
//  .accountId(java.lang.String)
//  .autoAdjustData(BudgetsBudgetAutoAdjustData)
//  .costFilter(IResolvable)
//  .costFilter(java.util.List<BudgetsBudgetCostFilter>)
//  .costFilters(java.util.Map<java.lang.String, java.lang.String>)
//  .costTypes(BudgetsBudgetCostTypes)
//  .id(java.lang.String)
//  .limitAmount(java.lang.String)
//  .limitUnit(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .notification(IResolvable)
//  .notification(java.util.List<BudgetsBudgetNotification>)
//  .plannedLimit(IResolvable)
//  .plannedLimit(java.util.List<BudgetsBudgetPlannedLimit>)
//  .timePeriodEnd(java.lang.String)
//  .timePeriodStart(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.budgetType">budgetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilter">costFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>></code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilters">costFilters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitAmount">limitAmount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitUnit">limitUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.notification">notification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>></code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.plannedLimit">plannedLimit</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>></code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodEnd">timePeriodEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodStart">timePeriodStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.budgetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timeUnit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `autoAdjustData`<sup>Optional</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.autoAdjustData"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `costFilter`<sup>Optional</sup> <a name="costFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>>

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `costFilters`<sup>Optional</sup> <a name="costFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `costTypes`<sup>Optional</sup> <a name="costTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costTypes"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitAmount`<sup>Optional</sup> <a name="limitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitAmount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `limitUnit`<sup>Optional</sup> <a name="limitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitUnit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.notification"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>>

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `plannedLimit`<sup>Optional</sup> <a name="plannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.plannedLimit"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>>

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `timePeriodEnd`<sup>Optional</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodEnd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `timePeriodStart`<sup>Optional</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData">putAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter">putCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes">putCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit">putPlannedLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData">resetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter">resetCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters">resetCostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes">resetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount">resetLimitAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit">resetLimitUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit">resetPlannedLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd">resetTimePeriodEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart">resetTimePeriodStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoAdjustData` <a name="putAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData"></a>

```java
public void putAutoAdjustData(BudgetsBudgetAutoAdjustData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `putCostFilter` <a name="putCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter"></a>

```java
public void putCostFilter(IResolvable OR java.util.List<BudgetsBudgetCostFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>>

---

##### `putCostTypes` <a name="putCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes"></a>

```java
public void putCostTypes(BudgetsBudgetCostTypes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `putNotification` <a name="putNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification"></a>

```java
public void putNotification(IResolvable OR java.util.List<BudgetsBudgetNotification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>>

---

##### `putPlannedLimit` <a name="putPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit"></a>

```java
public void putPlannedLimit(IResolvable OR java.util.List<BudgetsBudgetPlannedLimit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAutoAdjustData` <a name="resetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData"></a>

```java
public void resetAutoAdjustData()
```

##### `resetCostFilter` <a name="resetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter"></a>

```java
public void resetCostFilter()
```

##### `resetCostFilters` <a name="resetCostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters"></a>

```java
public void resetCostFilters()
```

##### `resetCostTypes` <a name="resetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes"></a>

```java
public void resetCostTypes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId"></a>

```java
public void resetId()
```

##### `resetLimitAmount` <a name="resetLimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount"></a>

```java
public void resetLimitAmount()
```

##### `resetLimitUnit` <a name="resetLimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit"></a>

```java
public void resetLimitUnit()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification"></a>

```java
public void resetNotification()
```

##### `resetPlannedLimit` <a name="resetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit"></a>

```java
public void resetPlannedLimit()
```

##### `resetTimePeriodEnd` <a name="resetTimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd"></a>

```java
public void resetTimePeriodEnd()
```

##### `resetTimePeriodStart` <a name="resetTimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart"></a>

```java
public void resetTimePeriodStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudget;

BudgetsBudget.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudget;

BudgetsBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudget;

BudgetsBudget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter">costFilter</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit">plannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput">autoAdjustDataInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput">budgetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput">costFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput">costFiltersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput">costTypesInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput">limitAmountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput">limitUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput">notificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput">plannedLimitInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput">timePeriodEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput">timePeriodStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput">timeUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType">budgetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters">costFilters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount">limitAmount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit">limitUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd">timePeriodEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart">timePeriodStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoAdjustData`<sup>Required</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData"></a>

```java
public BudgetsBudgetAutoAdjustDataOutputReference getAutoAdjustData();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a>

---

##### `costFilter`<sup>Required</sup> <a name="costFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter"></a>

```java
public BudgetsBudgetCostFilterList getCostFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a>

---

##### `costTypes`<sup>Required</sup> <a name="costTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes"></a>

```java
public BudgetsBudgetCostTypesOutputReference getCostTypes();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification"></a>

```java
public BudgetsBudgetNotificationList getNotification();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a>

---

##### `plannedLimit`<sup>Required</sup> <a name="plannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit"></a>

```java
public BudgetsBudgetPlannedLimitList getPlannedLimit();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `autoAdjustDataInput`<sup>Optional</sup> <a name="autoAdjustDataInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput"></a>

```java
public BudgetsBudgetAutoAdjustData getAutoAdjustDataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `budgetTypeInput`<sup>Optional</sup> <a name="budgetTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput"></a>

```java
public java.lang.String getBudgetTypeInput();
```

- *Type:* java.lang.String

---

##### `costFilterInput`<sup>Optional</sup> <a name="costFilterInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput"></a>

```java
public java.lang.Object getCostFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>>

---

##### `costFiltersInput`<sup>Optional</sup> <a name="costFiltersInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCostFiltersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `costTypesInput`<sup>Optional</sup> <a name="costTypesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput"></a>

```java
public BudgetsBudgetCostTypes getCostTypesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitAmountInput`<sup>Optional</sup> <a name="limitAmountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput"></a>

```java
public java.lang.String getLimitAmountInput();
```

- *Type:* java.lang.String

---

##### `limitUnitInput`<sup>Optional</sup> <a name="limitUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput"></a>

```java
public java.lang.String getLimitUnitInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput"></a>

```java
public java.lang.Object getNotificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>>

---

##### `plannedLimitInput`<sup>Optional</sup> <a name="plannedLimitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput"></a>

```java
public java.lang.Object getPlannedLimitInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>>

---

##### `timePeriodEndInput`<sup>Optional</sup> <a name="timePeriodEndInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput"></a>

```java
public java.lang.String getTimePeriodEndInput();
```

- *Type:* java.lang.String

---

##### `timePeriodStartInput`<sup>Optional</sup> <a name="timePeriodStartInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput"></a>

```java
public java.lang.String getTimePeriodStartInput();
```

- *Type:* java.lang.String

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput"></a>

```java
public java.lang.String getTimeUnitInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType"></a>

```java
public java.lang.String getBudgetType();
```

- *Type:* java.lang.String

---

##### `costFilters`<sup>Required</sup> <a name="costFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCostFilters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limitAmount`<sup>Required</sup> <a name="limitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount"></a>

```java
public java.lang.String getLimitAmount();
```

- *Type:* java.lang.String

---

##### `limitUnit`<sup>Required</sup> <a name="limitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit"></a>

```java
public java.lang.String getLimitUnit();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `timePeriodEnd`<sup>Required</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd"></a>

```java
public java.lang.String getTimePeriodEnd();
```

- *Type:* java.lang.String

---

##### `timePeriodStart`<sup>Required</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart"></a>

```java
public java.lang.String getTimePeriodStart();
```

- *Type:* java.lang.String

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetAutoAdjustData <a name="BudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetAutoAdjustData;

BudgetsBudgetAutoAdjustData.builder()
    .autoAdjustType(java.lang.String)
//  .historicalOptions(BudgetsBudgetAutoAdjustDataHistoricalOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType">autoAdjustType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions">historicalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | historical_options block. |

---

##### `autoAdjustType`<sup>Required</sup> <a name="autoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType"></a>

```java
public java.lang.String getAutoAdjustType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}.

---

##### `historicalOptions`<sup>Optional</sup> <a name="historicalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions"></a>

```java
public BudgetsBudgetAutoAdjustDataHistoricalOptions getHistoricalOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

historical_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#historical_options BudgetsBudget#historical_options}

---

### BudgetsBudgetAutoAdjustDataHistoricalOptions <a name="BudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetAutoAdjustDataHistoricalOptions;

BudgetsBudgetAutoAdjustDataHistoricalOptions.builder()
    .budgetAdjustmentPeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod">budgetAdjustmentPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}. |

---

##### `budgetAdjustmentPeriod`<sup>Required</sup> <a name="budgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod"></a>

```java
public java.lang.Number getBudgetAdjustmentPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}.

---

### BudgetsBudgetConfig <a name="BudgetsBudgetConfig" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetConfig;

BudgetsBudgetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .budgetType(java.lang.String)
    .timeUnit(java.lang.String)
//  .accountId(java.lang.String)
//  .autoAdjustData(BudgetsBudgetAutoAdjustData)
//  .costFilter(IResolvable)
//  .costFilter(java.util.List<BudgetsBudgetCostFilter>)
//  .costFilters(java.util.Map<java.lang.String, java.lang.String>)
//  .costTypes(BudgetsBudgetCostTypes)
//  .id(java.lang.String)
//  .limitAmount(java.lang.String)
//  .limitUnit(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .notification(IResolvable)
//  .notification(java.util.List<BudgetsBudgetNotification>)
//  .plannedLimit(IResolvable)
//  .plannedLimit(java.util.List<BudgetsBudgetPlannedLimit>)
//  .timePeriodEnd(java.lang.String)
//  .timePeriodStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType">budgetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter">costFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>></code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters">costFilters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount">limitAmount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit">limitUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification">notification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>></code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit">plannedLimit</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>></code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd">timePeriodEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart">timePeriodStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType"></a>

```java
public java.lang.String getBudgetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `autoAdjustData`<sup>Optional</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData"></a>

```java
public BudgetsBudgetAutoAdjustData getAutoAdjustData();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `costFilter`<sup>Optional</sup> <a name="costFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter"></a>

```java
public java.lang.Object getCostFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>>

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `costFilters`<sup>Optional</sup> <a name="costFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCostFilters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `costTypes`<sup>Optional</sup> <a name="costTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes"></a>

```java
public BudgetsBudgetCostTypes getCostTypes();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitAmount`<sup>Optional</sup> <a name="limitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount"></a>

```java
public java.lang.String getLimitAmount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `limitUnit`<sup>Optional</sup> <a name="limitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit"></a>

```java
public java.lang.String getLimitUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification"></a>

```java
public java.lang.Object getNotification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>>

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `plannedLimit`<sup>Optional</sup> <a name="plannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit"></a>

```java
public java.lang.Object getPlannedLimit();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>>

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `timePeriodEnd`<sup>Optional</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd"></a>

```java
public java.lang.String getTimePeriodEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `timePeriodStart`<sup>Optional</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart"></a>

```java
public java.lang.String getTimePeriodStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

### BudgetsBudgetCostFilter <a name="BudgetsBudgetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetCostFilter;

BudgetsBudgetCostFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}.

---

### BudgetsBudgetCostTypes <a name="BudgetsBudgetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetCostTypes;

BudgetsBudgetCostTypes.builder()
//  .includeCredit(java.lang.Boolean)
//  .includeCredit(IResolvable)
//  .includeDiscount(java.lang.Boolean)
//  .includeDiscount(IResolvable)
//  .includeOtherSubscription(java.lang.Boolean)
//  .includeOtherSubscription(IResolvable)
//  .includeRecurring(java.lang.Boolean)
//  .includeRecurring(IResolvable)
//  .includeRefund(java.lang.Boolean)
//  .includeRefund(IResolvable)
//  .includeSubscription(java.lang.Boolean)
//  .includeSubscription(IResolvable)
//  .includeSupport(java.lang.Boolean)
//  .includeSupport(IResolvable)
//  .includeTax(java.lang.Boolean)
//  .includeTax(IResolvable)
//  .includeUpfront(java.lang.Boolean)
//  .includeUpfront(IResolvable)
//  .useAmortized(java.lang.Boolean)
//  .useAmortized(IResolvable)
//  .useBlended(java.lang.Boolean)
//  .useBlended(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit">includeCredit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount">includeDiscount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring">includeRecurring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund">includeRefund</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription">includeSubscription</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport">includeSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax">includeTax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront">includeUpfront</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized">useAmortized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended">useBlended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}. |

---

##### `includeCredit`<sup>Optional</sup> <a name="includeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit"></a>

```java
public java.lang.Object getIncludeCredit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

##### `includeDiscount`<sup>Optional</sup> <a name="includeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount"></a>

```java
public java.lang.Object getIncludeDiscount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

##### `includeOtherSubscription`<sup>Optional</sup> <a name="includeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription"></a>

```java
public java.lang.Object getIncludeOtherSubscription();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

##### `includeRecurring`<sup>Optional</sup> <a name="includeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring"></a>

```java
public java.lang.Object getIncludeRecurring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

##### `includeRefund`<sup>Optional</sup> <a name="includeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund"></a>

```java
public java.lang.Object getIncludeRefund();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

##### `includeSubscription`<sup>Optional</sup> <a name="includeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription"></a>

```java
public java.lang.Object getIncludeSubscription();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

##### `includeSupport`<sup>Optional</sup> <a name="includeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport"></a>

```java
public java.lang.Object getIncludeSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}.

---

##### `includeTax`<sup>Optional</sup> <a name="includeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax"></a>

```java
public java.lang.Object getIncludeTax();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

##### `includeUpfront`<sup>Optional</sup> <a name="includeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront"></a>

```java
public java.lang.Object getIncludeUpfront();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

##### `useAmortized`<sup>Optional</sup> <a name="useAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized"></a>

```java
public java.lang.Object getUseAmortized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

##### `useBlended`<sup>Optional</sup> <a name="useBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended"></a>

```java
public java.lang.Object getUseBlended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

### BudgetsBudgetNotification <a name="BudgetsBudgetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetNotification;

BudgetsBudgetNotification.builder()
    .comparisonOperator(java.lang.String)
    .notificationType(java.lang.String)
    .threshold(java.lang.Number)
    .thresholdType(java.lang.String)
//  .subscriberEmailAddresses(java.util.List<java.lang.String>)
//  .subscriberSnsTopicArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}.

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}.

---

##### `subscriberEmailAddresses`<sup>Optional</sup> <a name="subscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getSubscriberEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.

---

##### `subscriberSnsTopicArns`<sup>Optional</sup> <a name="subscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSubscriberSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.

---

### BudgetsBudgetPlannedLimit <a name="BudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetPlannedLimit;

BudgetsBudgetPlannedLimit.builder()
    .amount(java.lang.String)
    .startTime(java.lang.String)
    .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount">amount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference;

new BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">lookbackAvailablePeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput">budgetAdjustmentPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">budgetAdjustmentPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lookbackAvailablePeriods`<sup>Required</sup> <a name="lookbackAvailablePeriods" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```java
public java.lang.Number getLookbackAvailablePeriods();
```

- *Type:* java.lang.Number

---

##### `budgetAdjustmentPeriodInput`<sup>Optional</sup> <a name="budgetAdjustmentPeriodInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput"></a>

```java
public java.lang.Number getBudgetAdjustmentPeriodInput();
```

- *Type:* java.lang.Number

---

##### `budgetAdjustmentPeriod`<sup>Required</sup> <a name="budgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```java
public java.lang.Number getBudgetAdjustmentPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```java
public BudgetsBudgetAutoAdjustDataHistoricalOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### BudgetsBudgetAutoAdjustDataOutputReference <a name="BudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetAutoAdjustDataOutputReference;

new BudgetsBudgetAutoAdjustDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions">putHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions">resetHistoricalOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHistoricalOptions` <a name="putHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions"></a>

```java
public void putHistoricalOptions(BudgetsBudgetAutoAdjustDataHistoricalOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `resetHistoricalOptions` <a name="resetHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions"></a>

```java
public void resetHistoricalOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">historicalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">lastAutoAdjustTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput">autoAdjustTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput">historicalOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">autoAdjustType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `historicalOptions`<sup>Required</sup> <a name="historicalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```java
public BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference getHistoricalOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a>

---

##### `lastAutoAdjustTime`<sup>Required</sup> <a name="lastAutoAdjustTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```java
public java.lang.String getLastAutoAdjustTime();
```

- *Type:* java.lang.String

---

##### `autoAdjustTypeInput`<sup>Optional</sup> <a name="autoAdjustTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput"></a>

```java
public java.lang.String getAutoAdjustTypeInput();
```

- *Type:* java.lang.String

---

##### `historicalOptionsInput`<sup>Optional</sup> <a name="historicalOptionsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput"></a>

```java
public BudgetsBudgetAutoAdjustDataHistoricalOptions getHistoricalOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `autoAdjustType`<sup>Required</sup> <a name="autoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```java
public java.lang.String getAutoAdjustType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```java
public BudgetsBudgetAutoAdjustData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---


### BudgetsBudgetCostFilterList <a name="BudgetsBudgetCostFilterList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetCostFilterList;

new BudgetsBudgetCostFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get"></a>

```java
public BudgetsBudgetCostFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>>

---


### BudgetsBudgetCostFilterOutputReference <a name="BudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetCostFilterOutputReference;

new BudgetsBudgetCostFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### BudgetsBudgetCostTypesOutputReference <a name="BudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetCostTypesOutputReference;

new BudgetsBudgetCostTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit">resetIncludeCredit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount">resetIncludeDiscount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription">resetIncludeOtherSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring">resetIncludeRecurring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund">resetIncludeRefund</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription">resetIncludeSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport">resetIncludeSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax">resetIncludeTax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront">resetIncludeUpfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized">resetUseAmortized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended">resetUseBlended</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeCredit` <a name="resetIncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit"></a>

```java
public void resetIncludeCredit()
```

##### `resetIncludeDiscount` <a name="resetIncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount"></a>

```java
public void resetIncludeDiscount()
```

##### `resetIncludeOtherSubscription` <a name="resetIncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription"></a>

```java
public void resetIncludeOtherSubscription()
```

##### `resetIncludeRecurring` <a name="resetIncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring"></a>

```java
public void resetIncludeRecurring()
```

##### `resetIncludeRefund` <a name="resetIncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund"></a>

```java
public void resetIncludeRefund()
```

##### `resetIncludeSubscription` <a name="resetIncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription"></a>

```java
public void resetIncludeSubscription()
```

##### `resetIncludeSupport` <a name="resetIncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport"></a>

```java
public void resetIncludeSupport()
```

##### `resetIncludeTax` <a name="resetIncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax"></a>

```java
public void resetIncludeTax()
```

##### `resetIncludeUpfront` <a name="resetIncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront"></a>

```java
public void resetIncludeUpfront()
```

##### `resetUseAmortized` <a name="resetUseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized"></a>

```java
public void resetUseAmortized()
```

##### `resetUseBlended` <a name="resetUseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended"></a>

```java
public void resetUseBlended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput">includeCreditInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput">includeDiscountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput">includeOtherSubscriptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput">includeRecurringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput">includeRefundInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput">includeSubscriptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput">includeSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput">includeTaxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput">includeUpfrontInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput">useAmortizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput">useBlendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit">includeCredit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount">includeDiscount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring">includeRecurring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund">includeRefund</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription">includeSubscription</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport">includeSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax">includeTax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront">includeUpfront</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized">useAmortized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended">useBlended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeCreditInput`<sup>Optional</sup> <a name="includeCreditInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput"></a>

```java
public java.lang.Object getIncludeCreditInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeDiscountInput`<sup>Optional</sup> <a name="includeDiscountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput"></a>

```java
public java.lang.Object getIncludeDiscountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeOtherSubscriptionInput`<sup>Optional</sup> <a name="includeOtherSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput"></a>

```java
public java.lang.Object getIncludeOtherSubscriptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeRecurringInput`<sup>Optional</sup> <a name="includeRecurringInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput"></a>

```java
public java.lang.Object getIncludeRecurringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeRefundInput`<sup>Optional</sup> <a name="includeRefundInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput"></a>

```java
public java.lang.Object getIncludeRefundInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSubscriptionInput`<sup>Optional</sup> <a name="includeSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput"></a>

```java
public java.lang.Object getIncludeSubscriptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSupportInput`<sup>Optional</sup> <a name="includeSupportInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput"></a>

```java
public java.lang.Object getIncludeSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTaxInput`<sup>Optional</sup> <a name="includeTaxInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput"></a>

```java
public java.lang.Object getIncludeTaxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeUpfrontInput`<sup>Optional</sup> <a name="includeUpfrontInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput"></a>

```java
public java.lang.Object getIncludeUpfrontInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useAmortizedInput`<sup>Optional</sup> <a name="useAmortizedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput"></a>

```java
public java.lang.Object getUseAmortizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useBlendedInput`<sup>Optional</sup> <a name="useBlendedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput"></a>

```java
public java.lang.Object getUseBlendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeCredit`<sup>Required</sup> <a name="includeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```java
public java.lang.Object getIncludeCredit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeDiscount`<sup>Required</sup> <a name="includeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```java
public java.lang.Object getIncludeDiscount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeOtherSubscription`<sup>Required</sup> <a name="includeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```java
public java.lang.Object getIncludeOtherSubscription();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeRecurring`<sup>Required</sup> <a name="includeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```java
public java.lang.Object getIncludeRecurring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeRefund`<sup>Required</sup> <a name="includeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```java
public java.lang.Object getIncludeRefund();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSubscription`<sup>Required</sup> <a name="includeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```java
public java.lang.Object getIncludeSubscription();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSupport`<sup>Required</sup> <a name="includeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```java
public java.lang.Object getIncludeSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTax`<sup>Required</sup> <a name="includeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```java
public java.lang.Object getIncludeTax();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeUpfront`<sup>Required</sup> <a name="includeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```java
public java.lang.Object getIncludeUpfront();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useAmortized`<sup>Required</sup> <a name="useAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```java
public java.lang.Object getUseAmortized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useBlended`<sup>Required</sup> <a name="useBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```java
public java.lang.Object getUseBlended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```java
public BudgetsBudgetCostTypes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---


### BudgetsBudgetNotificationList <a name="BudgetsBudgetNotificationList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetNotificationList;

new BudgetsBudgetNotificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get"></a>

```java
public BudgetsBudgetNotificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>>

---


### BudgetsBudgetNotificationOutputReference <a name="BudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetNotificationOutputReference;

new BudgetsBudgetNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses">resetSubscriberEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns">resetSubscriberSnsTopicArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriberEmailAddresses` <a name="resetSubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses"></a>

```java
public void resetSubscriberEmailAddresses()
```

##### `resetSubscriberSnsTopicArns` <a name="resetSubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns"></a>

```java
public void resetSubscriberSnsTopicArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput">notificationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput">subscriberEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput">subscriberSnsTopicArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput"></a>

```java
public java.lang.String getNotificationTypeInput();
```

- *Type:* java.lang.String

---

##### `subscriberEmailAddressesInput`<sup>Optional</sup> <a name="subscriberEmailAddressesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSubscriberEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriberSnsTopicArnsInput`<sup>Optional</sup> <a name="subscriberSnsTopicArnsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput"></a>

```java
public java.util.List<java.lang.String> getSubscriberSnsTopicArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput"></a>

```java
public java.lang.String getThresholdTypeInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

##### `subscriberEmailAddresses`<sup>Required</sup> <a name="subscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getSubscriberEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriberSnsTopicArns`<sup>Required</sup> <a name="subscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSubscriberSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a> OR com.hashicorp.cdktf.IResolvable

---


### BudgetsBudgetPlannedLimitList <a name="BudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetPlannedLimitList;

new BudgetsBudgetPlannedLimitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get"></a>

```java
public BudgetsBudgetPlannedLimitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>>

---


### BudgetsBudgetPlannedLimitOutputReference <a name="BudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.budgets_budget.BudgetsBudgetPlannedLimitOutputReference;

new BudgetsBudgetPlannedLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput"></a>

```java
public java.lang.String getAmountInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a> OR com.hashicorp.cdktf.IResolvable

---



