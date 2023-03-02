# `budgetsBudget` Submodule <a name="`budgetsBudget` Submodule" id="@cdktf/provider-aws.budgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudget <a name="BudgetsBudget" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  budget_type: str,
  time_unit: str,
  account_id: str = None,
  auto_adjust_data: BudgetsBudgetAutoAdjustData = None,
  cost_filter: typing.Union[IResolvable, typing.List[BudgetsBudgetCostFilter]] = None,
  cost_filters: typing.Mapping[str] = None,
  cost_types: BudgetsBudgetCostTypes = None,
  id: str = None,
  limit_amount: str = None,
  limit_unit: str = None,
  name: str = None,
  name_prefix: str = None,
  notification: typing.Union[IResolvable, typing.List[BudgetsBudgetNotification]] = None,
  planned_limit: typing.Union[IResolvable, typing.List[BudgetsBudgetPlannedLimit]] = None,
  time_period_end: str = None,
  time_period_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.budgetType">budget_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timeUnit">time_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.autoAdjustData">auto_adjust_data</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilter">cost_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]</code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilters">cost_filters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costTypes">cost_types</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitAmount">limit_amount</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitUnit">limit_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.plannedLimit">planned_limit</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]</code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodEnd">time_period_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodStart">time_period_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `budget_type`<sup>Required</sup> <a name="budget_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.budgetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timeUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `auto_adjust_data`<sup>Optional</sup> <a name="auto_adjust_data" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.autoAdjustData"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `cost_filter`<sup>Optional</sup> <a name="cost_filter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `cost_filters`<sup>Optional</sup> <a name="cost_filters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costFilters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `cost_types`<sup>Optional</sup> <a name="cost_types" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.costTypes"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_amount`<sup>Optional</sup> <a name="limit_amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitAmount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `limit_unit`<sup>Optional</sup> <a name="limit_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.limitUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.notification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `planned_limit`<sup>Optional</sup> <a name="planned_limit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.plannedLimit"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `time_period_end`<sup>Optional</sup> <a name="time_period_end" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `time_period_start`<sup>Optional</sup> <a name="time_period_start" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.timePeriodStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData">put_auto_adjust_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter">put_cost_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes">put_cost_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit">put_planned_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData">reset_auto_adjust_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter">reset_cost_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters">reset_cost_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes">reset_cost_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount">reset_limit_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit">reset_limit_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit">reset_planned_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd">reset_time_period_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart">reset_time_period_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_adjust_data` <a name="put_auto_adjust_data" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData"></a>

```python
def put_auto_adjust_data(
  auto_adjust_type: str,
  historical_options: BudgetsBudgetAutoAdjustDataHistoricalOptions = None
) -> None
```

###### `auto_adjust_type`<sup>Required</sup> <a name="auto_adjust_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData.parameter.autoAdjustType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}.

---

###### `historical_options`<sup>Optional</sup> <a name="historical_options" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData.parameter.historicalOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

historical_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#historical_options BudgetsBudget#historical_options}

---

##### `put_cost_filter` <a name="put_cost_filter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter"></a>

```python
def put_cost_filter(
  value: typing.Union[IResolvable, typing.List[BudgetsBudgetCostFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]

---

##### `put_cost_types` <a name="put_cost_types" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes"></a>

```python
def put_cost_types(
  include_credit: typing.Union[bool, IResolvable] = None,
  include_discount: typing.Union[bool, IResolvable] = None,
  include_other_subscription: typing.Union[bool, IResolvable] = None,
  include_recurring: typing.Union[bool, IResolvable] = None,
  include_refund: typing.Union[bool, IResolvable] = None,
  include_subscription: typing.Union[bool, IResolvable] = None,
  include_support: typing.Union[bool, IResolvable] = None,
  include_tax: typing.Union[bool, IResolvable] = None,
  include_upfront: typing.Union[bool, IResolvable] = None,
  use_amortized: typing.Union[bool, IResolvable] = None,
  use_blended: typing.Union[bool, IResolvable] = None
) -> None
```

###### `include_credit`<sup>Optional</sup> <a name="include_credit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeCredit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

###### `include_discount`<sup>Optional</sup> <a name="include_discount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeDiscount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

###### `include_other_subscription`<sup>Optional</sup> <a name="include_other_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeOtherSubscription"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

###### `include_recurring`<sup>Optional</sup> <a name="include_recurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeRecurring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

###### `include_refund`<sup>Optional</sup> <a name="include_refund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeRefund"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

###### `include_subscription`<sup>Optional</sup> <a name="include_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeSubscription"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

###### `include_support`<sup>Optional</sup> <a name="include_support" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}.

---

###### `include_tax`<sup>Optional</sup> <a name="include_tax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeTax"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

###### `include_upfront`<sup>Optional</sup> <a name="include_upfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.includeUpfront"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

###### `use_amortized`<sup>Optional</sup> <a name="use_amortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.useAmortized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

###### `use_blended`<sup>Optional</sup> <a name="use_blended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.useBlended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification"></a>

```python
def put_notification(
  value: typing.Union[IResolvable, typing.List[BudgetsBudgetNotification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]

---

##### `put_planned_limit` <a name="put_planned_limit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit"></a>

```python
def put_planned_limit(
  value: typing.Union[IResolvable, typing.List[BudgetsBudgetPlannedLimit]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_auto_adjust_data` <a name="reset_auto_adjust_data" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData"></a>

```python
def reset_auto_adjust_data() -> None
```

##### `reset_cost_filter` <a name="reset_cost_filter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter"></a>

```python
def reset_cost_filter() -> None
```

##### `reset_cost_filters` <a name="reset_cost_filters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters"></a>

```python
def reset_cost_filters() -> None
```

##### `reset_cost_types` <a name="reset_cost_types" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes"></a>

```python
def reset_cost_types() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit_amount` <a name="reset_limit_amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount"></a>

```python
def reset_limit_amount() -> None
```

##### `reset_limit_unit` <a name="reset_limit_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit"></a>

```python
def reset_limit_unit() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_planned_limit` <a name="reset_planned_limit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit"></a>

```python
def reset_planned_limit() -> None
```

##### `reset_time_period_end` <a name="reset_time_period_end" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd"></a>

```python
def reset_time_period_end() -> None
```

##### `reset_time_period_start` <a name="reset_time_period_start" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart"></a>

```python
def reset_time_period_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudget.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData">auto_adjust_data</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter">cost_filter</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes">cost_types</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit">planned_limit</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput">auto_adjust_data_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput">budget_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput">cost_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput">cost_filters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput">cost_types_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput">limit_amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput">limit_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput">planned_limit_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput">time_period_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput">time_period_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType">budget_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters">cost_filters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount">limit_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit">limit_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd">time_period_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart">time_period_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_adjust_data`<sup>Required</sup> <a name="auto_adjust_data" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData"></a>

```python
auto_adjust_data: BudgetsBudgetAutoAdjustDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a>

---

##### `cost_filter`<sup>Required</sup> <a name="cost_filter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter"></a>

```python
cost_filter: BudgetsBudgetCostFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a>

---

##### `cost_types`<sup>Required</sup> <a name="cost_types" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes"></a>

```python
cost_types: BudgetsBudgetCostTypesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification"></a>

```python
notification: BudgetsBudgetNotificationList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a>

---

##### `planned_limit`<sup>Required</sup> <a name="planned_limit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit"></a>

```python
planned_limit: BudgetsBudgetPlannedLimitList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `auto_adjust_data_input`<sup>Optional</sup> <a name="auto_adjust_data_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput"></a>

```python
auto_adjust_data_input: BudgetsBudgetAutoAdjustData
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `budget_type_input`<sup>Optional</sup> <a name="budget_type_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput"></a>

```python
budget_type_input: str
```

- *Type:* str

---

##### `cost_filter_input`<sup>Optional</sup> <a name="cost_filter_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput"></a>

```python
cost_filter_input: typing.Union[IResolvable, typing.List[BudgetsBudgetCostFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]

---

##### `cost_filters_input`<sup>Optional</sup> <a name="cost_filters_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput"></a>

```python
cost_filters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cost_types_input`<sup>Optional</sup> <a name="cost_types_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput"></a>

```python
cost_types_input: BudgetsBudgetCostTypes
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_amount_input`<sup>Optional</sup> <a name="limit_amount_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput"></a>

```python
limit_amount_input: str
```

- *Type:* str

---

##### `limit_unit_input`<sup>Optional</sup> <a name="limit_unit_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput"></a>

```python
limit_unit_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, typing.List[BudgetsBudgetNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]

---

##### `planned_limit_input`<sup>Optional</sup> <a name="planned_limit_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput"></a>

```python
planned_limit_input: typing.Union[IResolvable, typing.List[BudgetsBudgetPlannedLimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]

---

##### `time_period_end_input`<sup>Optional</sup> <a name="time_period_end_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput"></a>

```python
time_period_end_input: str
```

- *Type:* str

---

##### `time_period_start_input`<sup>Optional</sup> <a name="time_period_start_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput"></a>

```python
time_period_start_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `budget_type`<sup>Required</sup> <a name="budget_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType"></a>

```python
budget_type: str
```

- *Type:* str

---

##### `cost_filters`<sup>Required</sup> <a name="cost_filters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters"></a>

```python
cost_filters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_amount`<sup>Required</sup> <a name="limit_amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount"></a>

```python
limit_amount: str
```

- *Type:* str

---

##### `limit_unit`<sup>Required</sup> <a name="limit_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit"></a>

```python
limit_unit: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `time_period_end`<sup>Required</sup> <a name="time_period_end" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd"></a>

```python
time_period_end: str
```

- *Type:* str

---

##### `time_period_start`<sup>Required</sup> <a name="time_period_start" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart"></a>

```python
time_period_start: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetAutoAdjustData <a name="BudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetAutoAdjustData(
  auto_adjust_type: str,
  historical_options: BudgetsBudgetAutoAdjustDataHistoricalOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType">auto_adjust_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions">historical_options</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | historical_options block. |

---

##### `auto_adjust_type`<sup>Required</sup> <a name="auto_adjust_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType"></a>

```python
auto_adjust_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}.

---

##### `historical_options`<sup>Optional</sup> <a name="historical_options" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions"></a>

```python
historical_options: BudgetsBudgetAutoAdjustDataHistoricalOptions
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

historical_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#historical_options BudgetsBudget#historical_options}

---

### BudgetsBudgetAutoAdjustDataHistoricalOptions <a name="BudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions(
  budget_adjustment_period: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod">budget_adjustment_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}. |

---

##### `budget_adjustment_period`<sup>Required</sup> <a name="budget_adjustment_period" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod"></a>

```python
budget_adjustment_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}.

---

### BudgetsBudgetConfig <a name="BudgetsBudgetConfig" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  budget_type: str,
  time_unit: str,
  account_id: str = None,
  auto_adjust_data: BudgetsBudgetAutoAdjustData = None,
  cost_filter: typing.Union[IResolvable, typing.List[BudgetsBudgetCostFilter]] = None,
  cost_filters: typing.Mapping[str] = None,
  cost_types: BudgetsBudgetCostTypes = None,
  id: str = None,
  limit_amount: str = None,
  limit_unit: str = None,
  name: str = None,
  name_prefix: str = None,
  notification: typing.Union[IResolvable, typing.List[BudgetsBudgetNotification]] = None,
  planned_limit: typing.Union[IResolvable, typing.List[BudgetsBudgetPlannedLimit]] = None,
  time_period_end: str = None,
  time_period_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType">budget_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit">time_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData">auto_adjust_data</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter">cost_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]</code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters">cost_filters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes">cost_types</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount">limit_amount</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit">limit_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit">planned_limit</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]</code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd">time_period_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart">time_period_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `budget_type`<sup>Required</sup> <a name="budget_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType"></a>

```python
budget_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `auto_adjust_data`<sup>Optional</sup> <a name="auto_adjust_data" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData"></a>

```python
auto_adjust_data: BudgetsBudgetAutoAdjustData
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `cost_filter`<sup>Optional</sup> <a name="cost_filter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter"></a>

```python
cost_filter: typing.Union[IResolvable, typing.List[BudgetsBudgetCostFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `cost_filters`<sup>Optional</sup> <a name="cost_filters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters"></a>

```python
cost_filters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `cost_types`<sup>Optional</sup> <a name="cost_types" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes"></a>

```python
cost_types: BudgetsBudgetCostTypes
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_amount`<sup>Optional</sup> <a name="limit_amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount"></a>

```python
limit_amount: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `limit_unit`<sup>Optional</sup> <a name="limit_unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit"></a>

```python
limit_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification"></a>

```python
notification: typing.Union[IResolvable, typing.List[BudgetsBudgetNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `planned_limit`<sup>Optional</sup> <a name="planned_limit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit"></a>

```python
planned_limit: typing.Union[IResolvable, typing.List[BudgetsBudgetPlannedLimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `time_period_end`<sup>Optional</sup> <a name="time_period_end" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd"></a>

```python
time_period_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `time_period_start`<sup>Optional</sup> <a name="time_period_start" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart"></a>

```python
time_period_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

### BudgetsBudgetCostFilter <a name="BudgetsBudgetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetCostFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}.

---

### BudgetsBudgetCostTypes <a name="BudgetsBudgetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetCostTypes(
  include_credit: typing.Union[bool, IResolvable] = None,
  include_discount: typing.Union[bool, IResolvable] = None,
  include_other_subscription: typing.Union[bool, IResolvable] = None,
  include_recurring: typing.Union[bool, IResolvable] = None,
  include_refund: typing.Union[bool, IResolvable] = None,
  include_subscription: typing.Union[bool, IResolvable] = None,
  include_support: typing.Union[bool, IResolvable] = None,
  include_tax: typing.Union[bool, IResolvable] = None,
  include_upfront: typing.Union[bool, IResolvable] = None,
  use_amortized: typing.Union[bool, IResolvable] = None,
  use_blended: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit">include_credit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount">include_discount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription">include_other_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring">include_recurring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund">include_refund</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription">include_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport">include_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax">include_tax</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront">include_upfront</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized">use_amortized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended">use_blended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}. |

---

##### `include_credit`<sup>Optional</sup> <a name="include_credit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit"></a>

```python
include_credit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

##### `include_discount`<sup>Optional</sup> <a name="include_discount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount"></a>

```python
include_discount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

##### `include_other_subscription`<sup>Optional</sup> <a name="include_other_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription"></a>

```python
include_other_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

##### `include_recurring`<sup>Optional</sup> <a name="include_recurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring"></a>

```python
include_recurring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

##### `include_refund`<sup>Optional</sup> <a name="include_refund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund"></a>

```python
include_refund: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

##### `include_subscription`<sup>Optional</sup> <a name="include_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription"></a>

```python
include_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

##### `include_support`<sup>Optional</sup> <a name="include_support" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport"></a>

```python
include_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}.

---

##### `include_tax`<sup>Optional</sup> <a name="include_tax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax"></a>

```python
include_tax: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

##### `include_upfront`<sup>Optional</sup> <a name="include_upfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront"></a>

```python
include_upfront: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

##### `use_amortized`<sup>Optional</sup> <a name="use_amortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized"></a>

```python
use_amortized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

##### `use_blended`<sup>Optional</sup> <a name="use_blended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended"></a>

```python
use_blended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

### BudgetsBudgetNotification <a name="BudgetsBudgetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetNotification(
  comparison_operator: str,
  notification_type: str,
  threshold: typing.Union[int, float],
  threshold_type: str,
  subscriber_email_addresses: typing.List[str] = None,
  subscriber_sns_topic_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType">threshold_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses">subscriber_email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns">subscriber_sns_topic_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}.

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}.

---

##### `subscriber_email_addresses`<sup>Optional</sup> <a name="subscriber_email_addresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses"></a>

```python
subscriber_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.

---

##### `subscriber_sns_topic_arns`<sup>Optional</sup> <a name="subscriber_sns_topic_arns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns"></a>

```python
subscriber_sns_topic_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.

---

### BudgetsBudgetPlannedLimit <a name="BudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetPlannedLimit(
  amount: str,
  start_time: str,
  unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount">amount</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount"></a>

```python
amount: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">lookback_available_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput">budget_adjustment_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">budget_adjustment_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lookback_available_periods`<sup>Required</sup> <a name="lookback_available_periods" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```python
lookback_available_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_adjustment_period_input`<sup>Optional</sup> <a name="budget_adjustment_period_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput"></a>

```python
budget_adjustment_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_adjustment_period`<sup>Required</sup> <a name="budget_adjustment_period" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```python
budget_adjustment_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetAutoAdjustDataHistoricalOptions
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### BudgetsBudgetAutoAdjustDataOutputReference <a name="BudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions">put_historical_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions">reset_historical_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_historical_options` <a name="put_historical_options" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions"></a>

```python
def put_historical_options(
  budget_adjustment_period: typing.Union[int, float]
) -> None
```

###### `budget_adjustment_period`<sup>Required</sup> <a name="budget_adjustment_period" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions.parameter.budgetAdjustmentPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}.

---

##### `reset_historical_options` <a name="reset_historical_options" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions"></a>

```python
def reset_historical_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">historical_options</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">last_auto_adjust_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput">auto_adjust_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput">historical_options_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">auto_adjust_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `historical_options`<sup>Required</sup> <a name="historical_options" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```python
historical_options: BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a>

---

##### `last_auto_adjust_time`<sup>Required</sup> <a name="last_auto_adjust_time" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```python
last_auto_adjust_time: str
```

- *Type:* str

---

##### `auto_adjust_type_input`<sup>Optional</sup> <a name="auto_adjust_type_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput"></a>

```python
auto_adjust_type_input: str
```

- *Type:* str

---

##### `historical_options_input`<sup>Optional</sup> <a name="historical_options_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput"></a>

```python
historical_options_input: BudgetsBudgetAutoAdjustDataHistoricalOptions
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `auto_adjust_type`<sup>Required</sup> <a name="auto_adjust_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```python
auto_adjust_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetAutoAdjustData
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---


### BudgetsBudgetCostFilterList <a name="BudgetsBudgetCostFilterList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetCostFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetsBudgetCostFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BudgetsBudgetCostFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>]]

---


### BudgetsBudgetCostFilterOutputReference <a name="BudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetCostFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BudgetsBudgetCostFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>, cdktf.IResolvable]

---


### BudgetsBudgetCostTypesOutputReference <a name="BudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetCostTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit">reset_include_credit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount">reset_include_discount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription">reset_include_other_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring">reset_include_recurring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund">reset_include_refund</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription">reset_include_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport">reset_include_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax">reset_include_tax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront">reset_include_upfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized">reset_use_amortized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended">reset_use_blended</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_credit` <a name="reset_include_credit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit"></a>

```python
def reset_include_credit() -> None
```

##### `reset_include_discount` <a name="reset_include_discount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount"></a>

```python
def reset_include_discount() -> None
```

##### `reset_include_other_subscription` <a name="reset_include_other_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription"></a>

```python
def reset_include_other_subscription() -> None
```

##### `reset_include_recurring` <a name="reset_include_recurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring"></a>

```python
def reset_include_recurring() -> None
```

##### `reset_include_refund` <a name="reset_include_refund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund"></a>

```python
def reset_include_refund() -> None
```

##### `reset_include_subscription` <a name="reset_include_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription"></a>

```python
def reset_include_subscription() -> None
```

##### `reset_include_support` <a name="reset_include_support" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport"></a>

```python
def reset_include_support() -> None
```

##### `reset_include_tax` <a name="reset_include_tax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax"></a>

```python
def reset_include_tax() -> None
```

##### `reset_include_upfront` <a name="reset_include_upfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront"></a>

```python
def reset_include_upfront() -> None
```

##### `reset_use_amortized` <a name="reset_use_amortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized"></a>

```python
def reset_use_amortized() -> None
```

##### `reset_use_blended` <a name="reset_use_blended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended"></a>

```python
def reset_use_blended() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput">include_credit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput">include_discount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput">include_other_subscription_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput">include_recurring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput">include_refund_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput">include_subscription_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput">include_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput">include_tax_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput">include_upfront_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput">use_amortized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput">use_blended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit">include_credit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount">include_discount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">include_other_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring">include_recurring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund">include_refund</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription">include_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport">include_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax">include_tax</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront">include_upfront</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized">use_amortized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended">use_blended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_credit_input`<sup>Optional</sup> <a name="include_credit_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput"></a>

```python
include_credit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_discount_input`<sup>Optional</sup> <a name="include_discount_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput"></a>

```python
include_discount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_other_subscription_input`<sup>Optional</sup> <a name="include_other_subscription_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput"></a>

```python
include_other_subscription_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_recurring_input`<sup>Optional</sup> <a name="include_recurring_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput"></a>

```python
include_recurring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_refund_input`<sup>Optional</sup> <a name="include_refund_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput"></a>

```python
include_refund_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_subscription_input`<sup>Optional</sup> <a name="include_subscription_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput"></a>

```python
include_subscription_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_support_input`<sup>Optional</sup> <a name="include_support_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput"></a>

```python
include_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_tax_input`<sup>Optional</sup> <a name="include_tax_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput"></a>

```python
include_tax_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_upfront_input`<sup>Optional</sup> <a name="include_upfront_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput"></a>

```python
include_upfront_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_amortized_input`<sup>Optional</sup> <a name="use_amortized_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput"></a>

```python
use_amortized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_blended_input`<sup>Optional</sup> <a name="use_blended_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput"></a>

```python
use_blended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_credit`<sup>Required</sup> <a name="include_credit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```python
include_credit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_discount`<sup>Required</sup> <a name="include_discount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```python
include_discount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_other_subscription`<sup>Required</sup> <a name="include_other_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```python
include_other_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_recurring`<sup>Required</sup> <a name="include_recurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```python
include_recurring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_refund`<sup>Required</sup> <a name="include_refund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```python
include_refund: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_subscription`<sup>Required</sup> <a name="include_subscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```python
include_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_support`<sup>Required</sup> <a name="include_support" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```python
include_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_tax`<sup>Required</sup> <a name="include_tax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```python
include_tax: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_upfront`<sup>Required</sup> <a name="include_upfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```python
include_upfront: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_amortized`<sup>Required</sup> <a name="use_amortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```python
use_amortized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_blended`<sup>Required</sup> <a name="use_blended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```python
use_blended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetCostTypes
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---


### BudgetsBudgetNotificationList <a name="BudgetsBudgetNotificationList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetsBudgetNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BudgetsBudgetNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>]]

---


### BudgetsBudgetNotificationOutputReference <a name="BudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses">reset_subscriber_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns">reset_subscriber_sns_topic_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subscriber_email_addresses` <a name="reset_subscriber_email_addresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses"></a>

```python
def reset_subscriber_email_addresses() -> None
```

##### `reset_subscriber_sns_topic_arns` <a name="reset_subscriber_sns_topic_arns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns"></a>

```python
def reset_subscriber_sns_topic_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput">notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput">subscriber_email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput">subscriber_sns_topic_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput">threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">subscriber_email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">subscriber_sns_topic_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `notification_type_input`<sup>Optional</sup> <a name="notification_type_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput"></a>

```python
notification_type_input: str
```

- *Type:* str

---

##### `subscriber_email_addresses_input`<sup>Optional</sup> <a name="subscriber_email_addresses_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput"></a>

```python
subscriber_email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subscriber_sns_topic_arns_input`<sup>Optional</sup> <a name="subscriber_sns_topic_arns_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput"></a>

```python
subscriber_sns_topic_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type_input`<sup>Optional</sup> <a name="threshold_type_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput"></a>

```python
threshold_type_input: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

##### `subscriber_email_addresses`<sup>Required</sup> <a name="subscriber_email_addresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```python
subscriber_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subscriber_sns_topic_arns`<sup>Required</sup> <a name="subscriber_sns_topic_arns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```python
subscriber_sns_topic_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BudgetsBudgetNotification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>, cdktf.IResolvable]

---


### BudgetsBudgetPlannedLimitList <a name="BudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetPlannedLimitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetsBudgetPlannedLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BudgetsBudgetPlannedLimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>]]

---


### BudgetsBudgetPlannedLimitOutputReference <a name="BudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget

budgetsBudget.BudgetsBudgetPlannedLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput">amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput"></a>

```python
amount_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BudgetsBudgetPlannedLimit, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>, cdktf.IResolvable]

---



