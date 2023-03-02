# `configOrganizationCustomRule` Submodule <a name="`configOrganizationCustomRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomRule <a name="ConfigOrganizationCustomRule" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule aws_config_organization_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lambda_function_arn: str,
  name: str,
  trigger_types: typing.List[str],
  description: str = None,
  excluded_accounts: typing.List[str] = None,
  id: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None,
  timeouts: ConfigOrganizationCustomRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.triggerTypes">trigger_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.inputParameters">input_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagValueScope">tag_value_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lambdaFunctionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}.

---

##### `trigger_types`<sup>Required</sup> <a name="trigger_types" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.triggerTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}.

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.inputParameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceIdScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceTypesScope"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagKeyScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagValueScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts">reset_excluded_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope">reset_resource_id_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope">reset_resource_types_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope">reset_tag_key_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope">reset_tag_value_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_excluded_accounts` <a name="reset_excluded_accounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts"></a>

```python
def reset_excluded_accounts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_resource_id_scope` <a name="reset_resource_id_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope"></a>

```python
def reset_resource_id_scope() -> None
```

##### `reset_resource_types_scope` <a name="reset_resource_types_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope"></a>

```python
def reset_resource_types_scope() -> None
```

##### `reset_tag_key_scope` <a name="reset_tag_key_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope"></a>

```python
def reset_tag_key_scope() -> None
```

##### `reset_tag_value_scope` <a name="reset_tag_value_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope"></a>

```python
def reset_tag_value_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput">excluded_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput">lambda_function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput">resource_id_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput">resource_types_scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput">tag_key_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput">tag_value_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput">trigger_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes">trigger_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts"></a>

```python
timeouts: ConfigOrganizationCustomRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `excluded_accounts_input`<sup>Optional</sup> <a name="excluded_accounts_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput"></a>

```python
excluded_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `lambda_function_arn_input`<sup>Optional</sup> <a name="lambda_function_arn_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput"></a>

```python
lambda_function_arn_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_id_scope_input`<sup>Optional</sup> <a name="resource_id_scope_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput"></a>

```python
resource_id_scope_input: str
```

- *Type:* str

---

##### `resource_types_scope_input`<sup>Optional</sup> <a name="resource_types_scope_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput"></a>

```python
resource_types_scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_scope_input`<sup>Optional</sup> <a name="tag_key_scope_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput"></a>

```python
tag_key_scope_input: str
```

- *Type:* str

---

##### `tag_value_scope_input`<sup>Optional</sup> <a name="tag_value_scope_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput"></a>

```python
tag_value_scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ConfigOrganizationCustomRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>, cdktf.IResolvable]

---

##### `trigger_types_input`<sup>Optional</sup> <a name="trigger_types_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput"></a>

```python
trigger_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `trigger_types`<sup>Required</sup> <a name="trigger_types" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes"></a>

```python
trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomRuleConfig <a name="ConfigOrganizationCustomRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lambda_function_arn: str,
  name: str,
  trigger_types: typing.List[str],
  description: str = None,
  excluded_accounts: typing.List[str] = None,
  id: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None,
  timeouts: ConfigOrganizationCustomRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes">trigger_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters">input_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}.

---

##### `trigger_types`<sup>Required</sup> <a name="trigger_types" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes"></a>

```python
trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}.

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts"></a>

```python
timeouts: ConfigOrganizationCustomRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}

---

### ConfigOrganizationCustomRuleTimeouts <a name="ConfigOrganizationCustomRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_custom_rule

configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConfigOrganizationCustomRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>, cdktf.IResolvable]

---



