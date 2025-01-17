# `dataAwsLbListenerRule` Submodule <a name="`dataAwsLbListenerRule` Submodule" id="@cdktf/provider-aws.dataAwsLbListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLbListenerRule <a name="DataAwsLbListenerRule" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleAction]] = None,
  arn: str = None,
  condition: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleCondition]] = None,
  listener_arn: str = None,
  priority: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.listenerArn">listener_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.action"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.condition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}

---

##### `listener_arn`<sup>Optional</sup> <a name="listener_arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.listenerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetListenerArn">reset_listener_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_listener_arn` <a name="reset_listener_arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetListenerArn"></a>

```python
def reset_listener_arn() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetPriority"></a>

```python
def reset_priority() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsLbListenerRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsLbListenerRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsLbListenerRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsLbListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLbListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList">DataAwsLbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList">DataAwsLbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArnInput">listener_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.action"></a>

```python
action: DataAwsLbListenerRuleActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList">DataAwsLbListenerRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.condition"></a>

```python
condition: DataAwsLbListenerRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList">DataAwsLbListenerRuleConditionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]

---

##### `listener_arn_input`<sup>Optional</sup> <a name="listener_arn_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArnInput"></a>

```python
listener_arn_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLbListenerRuleAction <a name="DataAwsLbListenerRuleAction" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleAction(
  forward: DataAwsLbListenerRuleActionForward = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a></code> | forward block. |

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction.property.forward"></a>

```python
forward: DataAwsLbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#forward DataAwsLbListenerRule#forward}

---

### DataAwsLbListenerRuleActionAuthenticateCognito <a name="DataAwsLbListenerRuleActionAuthenticateCognito" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito()
```


### DataAwsLbListenerRuleActionAuthenticateOidc <a name="DataAwsLbListenerRuleActionAuthenticateOidc" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc()
```


### DataAwsLbListenerRuleActionFixedResponse <a name="DataAwsLbListenerRuleActionFixedResponse" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse()
```


### DataAwsLbListenerRuleActionForward <a name="DataAwsLbListenerRuleActionForward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward(
  target_group: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleActionForwardTargetGroup]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward.property.targetGroup">target_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]</code> | target_group block. |

---

##### `target_group`<sup>Optional</sup> <a name="target_group" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward.property.targetGroup"></a>

```python
target_group: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleActionForwardTargetGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#target_group DataAwsLbListenerRule#target_group}

---

### DataAwsLbListenerRuleActionForwardStickiness <a name="DataAwsLbListenerRuleActionForwardStickiness" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness()
```


### DataAwsLbListenerRuleActionForwardTargetGroup <a name="DataAwsLbListenerRuleActionForwardTargetGroup" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup()
```


### DataAwsLbListenerRuleActionRedirect <a name="DataAwsLbListenerRuleActionRedirect" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect()
```


### DataAwsLbListenerRuleCondition <a name="DataAwsLbListenerRuleCondition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleCondition(
  query_string: DataAwsLbListenerRuleConditionQueryString = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a></code> | query_string block. |

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition.property.queryString"></a>

```python
query_string: DataAwsLbListenerRuleConditionQueryString
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#query_string DataAwsLbListenerRule#query_string}

---

### DataAwsLbListenerRuleConditionHostHeader <a name="DataAwsLbListenerRuleConditionHostHeader" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader()
```


### DataAwsLbListenerRuleConditionHttpHeader <a name="DataAwsLbListenerRuleConditionHttpHeader" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader()
```


### DataAwsLbListenerRuleConditionHttpRequestMethod <a name="DataAwsLbListenerRuleConditionHttpRequestMethod" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod()
```


### DataAwsLbListenerRuleConditionPathPattern <a name="DataAwsLbListenerRuleConditionPathPattern" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern()
```


### DataAwsLbListenerRuleConditionQueryString <a name="DataAwsLbListenerRuleConditionQueryString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString(
  values: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleConditionQueryStringValues]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString.property.values">values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]</code> | values block. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString.property.values"></a>

```python
values: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleConditionQueryStringValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#values DataAwsLbListenerRule#values}

---

### DataAwsLbListenerRuleConditionQueryStringValues <a name="DataAwsLbListenerRuleConditionQueryStringValues" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues()
```


### DataAwsLbListenerRuleConditionSourceIp <a name="DataAwsLbListenerRuleConditionSourceIp" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp()
```


### DataAwsLbListenerRuleConfig <a name="DataAwsLbListenerRuleConfig" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleAction]] = None,
  arn: str = None,
  condition: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleCondition]] = None,
  listener_arn: str = None,
  priority: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.listenerArn">listener_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}

---

##### `listener_arn`<sup>Optional</sup> <a name="listener_arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference <a name="DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito">DataAwsLbListenerRuleActionAuthenticateCognito</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionAuthenticateCognito]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito">DataAwsLbListenerRuleActionAuthenticateCognito</a>]

---


### DataAwsLbListenerRuleActionAuthenticateOidcOutputReference <a name="DataAwsLbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc">DataAwsLbListenerRuleActionAuthenticateOidc</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionAuthenticateOidc]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc">DataAwsLbListenerRuleActionAuthenticateOidc</a>]

---


### DataAwsLbListenerRuleActionFixedResponseOutputReference <a name="DataAwsLbListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse">DataAwsLbListenerRuleActionFixedResponse</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionFixedResponse]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse">DataAwsLbListenerRuleActionFixedResponse</a>]

---


### DataAwsLbListenerRuleActionForwardOutputReference <a name="DataAwsLbListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.putTargetGroup">put_target_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resetTargetGroup">reset_target_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_group` <a name="put_target_group" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```python
def put_target_group(
  value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleActionForwardTargetGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]

---

##### `reset_target_group` <a name="reset_target_group" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resetTargetGroup"></a>

```python
def reset_target_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference">DataAwsLbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroup">target_group</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList">DataAwsLbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroupInput">target_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```python
stickiness: DataAwsLbListenerRuleActionForwardStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference">DataAwsLbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```python
target_group: DataAwsLbListenerRuleActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList">DataAwsLbListenerRuleActionForwardTargetGroupList</a>

---

##### `target_group_input`<sup>Optional</sup> <a name="target_group_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```python
target_group_input: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleActionForwardTargetGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionForward]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>]

---


### DataAwsLbListenerRuleActionForwardStickinessOutputReference <a name="DataAwsLbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness">DataAwsLbListenerRuleActionForwardStickiness</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionForwardStickiness]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness">DataAwsLbListenerRuleActionForwardStickiness</a>]

---


### DataAwsLbListenerRuleActionForwardTargetGroupList <a name="DataAwsLbListenerRuleActionForwardTargetGroupList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLbListenerRuleActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleActionForwardTargetGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]

---


### DataAwsLbListenerRuleActionForwardTargetGroupOutputReference <a name="DataAwsLbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionForwardTargetGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]

---


### DataAwsLbListenerRuleActionList <a name="DataAwsLbListenerRuleActionList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLbListenerRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]]

---


### DataAwsLbListenerRuleActionOutputReference <a name="DataAwsLbListenerRuleActionOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.putForward">put_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resetForward">reset_forward</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_forward` <a name="put_forward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.putForward"></a>

```python
def put_forward(
  target_group: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleActionForwardTargetGroup]] = None
) -> None
```

###### `target_group`<sup>Optional</sup> <a name="target_group" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.putForward.parameter.targetGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>]]

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#target_group DataAwsLbListenerRule#target_group}

---

##### `reset_forward` <a name="reset_forward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resetForward"></a>

```python
def reset_forward() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateCognito">authenticate_cognito</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference">DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateOidc">authenticate_oidc</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference">DataAwsLbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference">DataAwsLbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference">DataAwsLbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference">DataAwsLbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forwardInput">forward_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito`<sup>Required</sup> <a name="authenticate_cognito" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```python
authenticate_cognito: DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference">DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `authenticate_oidc`<sup>Required</sup> <a name="authenticate_oidc" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```python
authenticate_oidc: DataAwsLbListenerRuleActionAuthenticateOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference">DataAwsLbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `fixed_response`<sup>Required</sup> <a name="fixed_response" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fixedResponse"></a>

```python
fixed_response: DataAwsLbListenerRuleActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference">DataAwsLbListenerRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forward"></a>

```python
forward: DataAwsLbListenerRuleActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference">DataAwsLbListenerRuleActionForwardOutputReference</a>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.redirect"></a>

```python
redirect: DataAwsLbListenerRuleActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference">DataAwsLbListenerRuleActionRedirectOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `forward_input`<sup>Optional</sup> <a name="forward_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forwardInput"></a>

```python
forward_input: typing.Union[IResolvable, DataAwsLbListenerRuleActionForward]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>]

---


### DataAwsLbListenerRuleActionRedirectOutputReference <a name="DataAwsLbListenerRuleActionRedirectOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect">DataAwsLbListenerRuleActionRedirect</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleActionRedirect]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect">DataAwsLbListenerRuleActionRedirect</a>]

---


### DataAwsLbListenerRuleConditionHostHeaderOutputReference <a name="DataAwsLbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader">DataAwsLbListenerRuleConditionHostHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionHostHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader">DataAwsLbListenerRuleConditionHostHeader</a>]

---


### DataAwsLbListenerRuleConditionHttpHeaderOutputReference <a name="DataAwsLbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader">DataAwsLbListenerRuleConditionHttpHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_header_name`<sup>Required</sup> <a name="http_header_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionHttpHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader">DataAwsLbListenerRuleConditionHttpHeader</a>]

---


### DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference <a name="DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod">DataAwsLbListenerRuleConditionHttpRequestMethod</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionHttpRequestMethod]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod">DataAwsLbListenerRuleConditionHttpRequestMethod</a>]

---


### DataAwsLbListenerRuleConditionList <a name="DataAwsLbListenerRuleConditionList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLbListenerRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]]

---


### DataAwsLbListenerRuleConditionOutputReference <a name="DataAwsLbListenerRuleConditionOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.putQueryString">put_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_query_string` <a name="put_query_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.putQueryString"></a>

```python
def put_query_string(
  values: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleConditionQueryStringValues]] = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.putQueryString.parameter.values"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/lb_listener_rule#values DataAwsLbListenerRule#values}

---

##### `reset_query_string` <a name="reset_query_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.hostHeader">host_header</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference">DataAwsLbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpHeader">http_header</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference">DataAwsLbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpRequestMethod">http_request_method</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference">DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.pathPattern">path_pattern</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference">DataAwsLbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference">DataAwsLbListenerRuleConditionQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.sourceIp">source_ip</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference">DataAwsLbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryStringInput">query_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_header`<sup>Required</sup> <a name="host_header" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.hostHeader"></a>

```python
host_header: DataAwsLbListenerRuleConditionHostHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference">DataAwsLbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `http_header`<sup>Required</sup> <a name="http_header" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpHeader"></a>

```python
http_header: DataAwsLbListenerRuleConditionHttpHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference">DataAwsLbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `http_request_method`<sup>Required</sup> <a name="http_request_method" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```python
http_request_method: DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference">DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.pathPattern"></a>

```python
path_pattern: DataAwsLbListenerRuleConditionPathPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference">DataAwsLbListenerRuleConditionPathPatternOutputReference</a>

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryString"></a>

```python
query_string: DataAwsLbListenerRuleConditionQueryStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference">DataAwsLbListenerRuleConditionQueryStringOutputReference</a>

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.sourceIp"></a>

```python
source_ip: DataAwsLbListenerRuleConditionSourceIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference">DataAwsLbListenerRuleConditionSourceIpOutputReference</a>

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```python
query_string_input: typing.Union[IResolvable, DataAwsLbListenerRuleConditionQueryString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>]

---


### DataAwsLbListenerRuleConditionPathPatternOutputReference <a name="DataAwsLbListenerRuleConditionPathPatternOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern">DataAwsLbListenerRuleConditionPathPattern</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionPathPattern]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern">DataAwsLbListenerRuleConditionPathPattern</a>]

---


### DataAwsLbListenerRuleConditionQueryStringOutputReference <a name="DataAwsLbListenerRuleConditionQueryStringOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values` <a name="put_values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.putValues"></a>

```python
def put_values(
  value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleConditionQueryStringValues]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.putValues.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]

---

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList">DataAwsLbListenerRuleConditionQueryStringValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.valuesInput">values_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.values"></a>

```python
values: DataAwsLbListenerRuleConditionQueryStringValuesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList">DataAwsLbListenerRuleConditionQueryStringValuesList</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.valuesInput"></a>

```python
values_input: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleConditionQueryStringValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionQueryString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>]

---


### DataAwsLbListenerRuleConditionQueryStringValuesList <a name="DataAwsLbListenerRuleConditionQueryStringValuesList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLbListenerRuleConditionQueryStringValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsLbListenerRuleConditionQueryStringValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]]

---


### DataAwsLbListenerRuleConditionQueryStringValuesOutputReference <a name="DataAwsLbListenerRuleConditionQueryStringValuesOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionQueryStringValues]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>]

---


### DataAwsLbListenerRuleConditionSourceIpOutputReference <a name="DataAwsLbListenerRuleConditionSourceIpOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lb_listener_rule

dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp">DataAwsLbListenerRuleConditionSourceIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLbListenerRuleConditionSourceIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp">DataAwsLbListenerRuleConditionSourceIp</a>]

---



