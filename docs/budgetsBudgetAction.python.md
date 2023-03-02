# `budgetsBudgetAction` Submodule <a name="`budgetsBudgetAction` Submodule" id="@cdktf/provider-aws.budgetsBudgetAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetAction <a name="BudgetsBudgetAction" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action aws_budgets_budget_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_threshold: BudgetsBudgetActionActionThreshold,
  action_type: str,
  approval_model: str,
  budget_name: str,
  definition: BudgetsBudgetActionDefinition,
  execution_role_arn: str,
  notification_type: str,
  subscriber: typing.Union[IResolvable, typing.List[BudgetsBudgetActionSubscriber]],
  account_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | action_threshold block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.approvalModel">approval_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.budgetName">budget_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.subscriber">subscriber</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.actionThreshold"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

action_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold BudgetsBudgetAction#action_threshold}

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}.

---

##### `approval_model`<sup>Required</sup> <a name="approval_model" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.approvalModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}.

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.budgetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#definition BudgetsBudgetAction#definition}

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.notificationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.subscriber"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscriber BudgetsBudgetAction#subscriber}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold">put_action_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber">put_subscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_action_threshold` <a name="put_action_threshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold"></a>

```python
def put_action_threshold(
  action_threshold_type: str,
  action_threshold_value: typing.Union[int, float]
) -> None
```

###### `action_threshold_type`<sup>Required</sup> <a name="action_threshold_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold.parameter.actionThresholdType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}.

---

###### `action_threshold_value`<sup>Required</sup> <a name="action_threshold_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold.parameter.actionThresholdValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}.

---

##### `put_definition` <a name="put_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition"></a>

```python
def put_definition(
  iam_action_definition: BudgetsBudgetActionDefinitionIamActionDefinition = None,
  scp_action_definition: BudgetsBudgetActionDefinitionScpActionDefinition = None,
  ssm_action_definition: BudgetsBudgetActionDefinitionSsmActionDefinition = None
) -> None
```

###### `iam_action_definition`<sup>Optional</sup> <a name="iam_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition.parameter.iamActionDefinition"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

iam_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#iam_action_definition BudgetsBudgetAction#iam_action_definition}

---

###### `scp_action_definition`<sup>Optional</sup> <a name="scp_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition.parameter.scpActionDefinition"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

scp_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#scp_action_definition BudgetsBudgetAction#scp_action_definition}

---

###### `ssm_action_definition`<sup>Optional</sup> <a name="ssm_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition.parameter.ssmActionDefinition"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

ssm_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}

---

##### `put_subscriber` <a name="put_subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber"></a>

```python
def put_subscriber(
  value: typing.Union[IResolvable, typing.List[BudgetsBudgetActionSubscriber]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference">BudgetsBudgetActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference">BudgetsBudgetActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriber">subscriber</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList">BudgetsBudgetActionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThresholdInput">action_threshold_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModelInput">approval_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetNameInput">budget_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definitionInput">definition_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationTypeInput">notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriberInput">subscriber_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModel">approval_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetName">budget_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThreshold"></a>

```python
action_threshold: BudgetsBudgetActionActionThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference">BudgetsBudgetActionActionThresholdOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definition"></a>

```python
definition: BudgetsBudgetActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference">BudgetsBudgetActionDefinitionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriber"></a>

```python
subscriber: BudgetsBudgetActionSubscriberList
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList">BudgetsBudgetActionSubscriberList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `action_threshold_input`<sup>Optional</sup> <a name="action_threshold_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThresholdInput"></a>

```python
action_threshold_input: BudgetsBudgetActionActionThreshold
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `approval_model_input`<sup>Optional</sup> <a name="approval_model_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModelInput"></a>

```python
approval_model_input: str
```

- *Type:* str

---

##### `budget_name_input`<sup>Optional</sup> <a name="budget_name_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetNameInput"></a>

```python
budget_name_input: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definitionInput"></a>

```python
definition_input: BudgetsBudgetActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_type_input`<sup>Optional</sup> <a name="notification_type_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationTypeInput"></a>

```python
notification_type_input: str
```

- *Type:* str

---

##### `subscriber_input`<sup>Optional</sup> <a name="subscriber_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriberInput"></a>

```python
subscriber_input: typing.Union[IResolvable, typing.List[BudgetsBudgetActionSubscriber]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `approval_model`<sup>Required</sup> <a name="approval_model" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModel"></a>

```python
approval_model: str
```

- *Type:* str

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetActionActionThreshold <a name="BudgetsBudgetActionActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionActionThreshold(
  action_threshold_type: str,
  action_threshold_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdType">action_threshold_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdValue">action_threshold_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}. |

---

##### `action_threshold_type`<sup>Required</sup> <a name="action_threshold_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdType"></a>

```python
action_threshold_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}.

---

##### `action_threshold_value`<sup>Required</sup> <a name="action_threshold_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdValue"></a>

```python
action_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}.

---

### BudgetsBudgetActionConfig <a name="BudgetsBudgetActionConfig" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_threshold: BudgetsBudgetActionActionThreshold,
  action_type: str,
  approval_model: str,
  budget_name: str,
  definition: BudgetsBudgetActionDefinition,
  execution_role_arn: str,
  notification_type: str,
  subscriber: typing.Union[IResolvable, typing.List[BudgetsBudgetActionSubscriber]],
  account_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | action_threshold block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.approvalModel">approval_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.budgetName">budget_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.subscriber">subscriber</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionThreshold"></a>

```python
action_threshold: BudgetsBudgetActionActionThreshold
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

action_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold BudgetsBudgetAction#action_threshold}

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}.

---

##### `approval_model`<sup>Required</sup> <a name="approval_model" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.approvalModel"></a>

```python
approval_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}.

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.definition"></a>

```python
definition: BudgetsBudgetActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#definition BudgetsBudgetAction#definition}

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.subscriber"></a>

```python
subscriber: typing.Union[IResolvable, typing.List[BudgetsBudgetActionSubscriber]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscriber BudgetsBudgetAction#subscriber}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BudgetsBudgetActionDefinition <a name="BudgetsBudgetActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinition(
  iam_action_definition: BudgetsBudgetActionDefinitionIamActionDefinition = None,
  scp_action_definition: BudgetsBudgetActionDefinitionScpActionDefinition = None,
  ssm_action_definition: BudgetsBudgetActionDefinitionSsmActionDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.iamActionDefinition">iam_action_definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | iam_action_definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.scpActionDefinition">scp_action_definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | scp_action_definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.ssmActionDefinition">ssm_action_definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | ssm_action_definition block. |

---

##### `iam_action_definition`<sup>Optional</sup> <a name="iam_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.iamActionDefinition"></a>

```python
iam_action_definition: BudgetsBudgetActionDefinitionIamActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

iam_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#iam_action_definition BudgetsBudgetAction#iam_action_definition}

---

##### `scp_action_definition`<sup>Optional</sup> <a name="scp_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.scpActionDefinition"></a>

```python
scp_action_definition: BudgetsBudgetActionDefinitionScpActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

scp_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#scp_action_definition BudgetsBudgetAction#scp_action_definition}

---

##### `ssm_action_definition`<sup>Optional</sup> <a name="ssm_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.ssmActionDefinition"></a>

```python
ssm_action_definition: BudgetsBudgetActionDefinitionSsmActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

ssm_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}

---

### BudgetsBudgetActionDefinitionIamActionDefinition <a name="BudgetsBudgetActionDefinitionIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition(
  policy_arn: str,
  groups: typing.List[str] = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.policyArn">policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.groups">groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}. |

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}.

---

### BudgetsBudgetActionDefinitionScpActionDefinition <a name="BudgetsBudgetActionDefinitionScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition(
  policy_id: str,
  target_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}. |

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}.

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}.

---

### BudgetsBudgetActionDefinitionSsmActionDefinition <a name="BudgetsBudgetActionDefinitionSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition(
  action_sub_type: str,
  instance_ids: typing.List[str],
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.actionSubType">action_sub_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.instanceIds">instance_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}. |

---

##### `action_sub_type`<sup>Required</sup> <a name="action_sub_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.actionSubType"></a>

```python
action_sub_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}.

---

##### `instance_ids`<sup>Required</sup> <a name="instance_ids" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```python
instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}.

---

### BudgetsBudgetActionSubscriber <a name="BudgetsBudgetActionSubscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionSubscriber(
  address: str,
  subscription_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.subscriptionType">subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}.

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetActionActionThresholdOutputReference <a name="BudgetsBudgetActionActionThresholdOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdTypeInput">action_threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValueInput">action_threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdType">action_threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValue">action_threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_threshold_type_input`<sup>Optional</sup> <a name="action_threshold_type_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdTypeInput"></a>

```python
action_threshold_type_input: str
```

- *Type:* str

---

##### `action_threshold_value_input`<sup>Optional</sup> <a name="action_threshold_value_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValueInput"></a>

```python
action_threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_threshold_type`<sup>Required</sup> <a name="action_threshold_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdType"></a>

```python
action_threshold_type: str
```

- *Type:* str

---

##### `action_threshold_value`<sup>Required</sup> <a name="action_threshold_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValue"></a>

```python
action_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetActionActionThreshold
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---


### BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetActionDefinitionIamActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition">put_iam_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition">put_scp_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition">put_ssm_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetIamActionDefinition">reset_iam_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetScpActionDefinition">reset_scp_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetSsmActionDefinition">reset_ssm_action_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iam_action_definition` <a name="put_iam_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition"></a>

```python
def put_iam_action_definition(
  policy_arn: str,
  groups: typing.List[str] = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
) -> None
```

###### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition.parameter.policyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}.

---

###### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition.parameter.groups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}.

---

###### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition.parameter.roles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}.

---

###### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition.parameter.users"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}.

---

##### `put_scp_action_definition` <a name="put_scp_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition"></a>

```python
def put_scp_action_definition(
  policy_id: str,
  target_ids: typing.List[str]
) -> None
```

###### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}.

---

###### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition.parameter.targetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}.

---

##### `put_ssm_action_definition` <a name="put_ssm_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition"></a>

```python
def put_ssm_action_definition(
  action_sub_type: str,
  instance_ids: typing.List[str],
  region: str
) -> None
```

###### `action_sub_type`<sup>Required</sup> <a name="action_sub_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition.parameter.actionSubType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}.

---

###### `instance_ids`<sup>Required</sup> <a name="instance_ids" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition.parameter.instanceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}.

---

##### `reset_iam_action_definition` <a name="reset_iam_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetIamActionDefinition"></a>

```python
def reset_iam_action_definition() -> None
```

##### `reset_scp_action_definition` <a name="reset_scp_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetScpActionDefinition"></a>

```python
def reset_scp_action_definition() -> None
```

##### `reset_ssm_action_definition` <a name="reset_ssm_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```python
def reset_ssm_action_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinition">iam_action_definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinition">scp_action_definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinition">ssm_action_definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinitionInput">iam_action_definition_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinitionInput">scp_action_definition_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinitionInput">ssm_action_definition_input</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_action_definition`<sup>Required</sup> <a name="iam_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinition"></a>

```python
iam_action_definition: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scp_action_definition`<sup>Required</sup> <a name="scp_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinition"></a>

```python
scp_action_definition: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssm_action_definition`<sup>Required</sup> <a name="ssm_action_definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```python
ssm_action_definition: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `iam_action_definition_input`<sup>Optional</sup> <a name="iam_action_definition_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```python
iam_action_definition_input: BudgetsBudgetActionDefinitionIamActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---

##### `scp_action_definition_input`<sup>Optional</sup> <a name="scp_action_definition_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```python
scp_action_definition_input: BudgetsBudgetActionDefinitionScpActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---

##### `ssm_action_definition_input`<sup>Optional</sup> <a name="ssm_action_definition_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```python
ssm_action_definition_input: BudgetsBudgetActionDefinitionSsmActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---


### BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">target_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `target_ids_input`<sup>Optional</sup> <a name="target_ids_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```python
target_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetActionDefinitionScpActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubTypeInput">action_sub_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubType">action_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_sub_type_input`<sup>Optional</sup> <a name="action_sub_type_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubTypeInput"></a>

```python
action_sub_type_input: str
```

- *Type:* str

---

##### `instance_ids_input`<sup>Optional</sup> <a name="instance_ids_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```python
instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `action_sub_type`<sup>Required</sup> <a name="action_sub_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubType"></a>

```python
action_sub_type: str
```

- *Type:* str

---

##### `instance_ids`<sup>Required</sup> <a name="instance_ids" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```python
instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: BudgetsBudgetActionDefinitionSsmActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetActionSubscriberList <a name="BudgetsBudgetActionSubscriberList" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionSubscriberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetsBudgetActionSubscriberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BudgetsBudgetActionSubscriber]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>]]

---


### BudgetsBudgetActionSubscriberOutputReference <a name="BudgetsBudgetActionSubscriberOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import budgets_budget_action

budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionTypeInput">subscription_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionType">subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `subscription_type_input`<sup>Optional</sup> <a name="subscription_type_input" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionTypeInput"></a>

```python
subscription_type_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BudgetsBudgetActionSubscriber, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>, cdktf.IResolvable]

---



