# `configOrganizationManagedRule` Submodule <a name="`configOrganizationManagedRule` Submodule" id="@cdktf/provider-aws.configOrganizationManagedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationManagedRule <a name="ConfigOrganizationManagedRule" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule aws_config_organization_managed_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule_identifier: str,
  description: str = None,
  excluded_accounts: typing.List[str] = None,
  id: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None,
  timeouts: ConfigOrganizationManagedRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.inputParameters">input_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.tagValueScope">tag_value_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}.

---

##### `rule_identifier`<sup>Required</sup> <a name="rule_identifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.ruleIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}.

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.inputParameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}.

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.resourceIdScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}.

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.resourceTypesScope"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}.

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.tagKeyScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}.

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.tagValueScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#timeouts ConfigOrganizationManagedRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts">reset_excluded_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope">reset_resource_id_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope">reset_resource_types_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope">reset_tag_key_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope">reset_tag_value_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_excluded_accounts` <a name="reset_excluded_accounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts"></a>

```python
def reset_excluded_accounts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_resource_id_scope` <a name="reset_resource_id_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope"></a>

```python
def reset_resource_id_scope() -> None
```

##### `reset_resource_types_scope` <a name="reset_resource_types_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope"></a>

```python
def reset_resource_types_scope() -> None
```

##### `reset_tag_key_scope` <a name="reset_tag_key_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope"></a>

```python
def reset_tag_key_scope() -> None
```

##### `reset_tag_value_scope` <a name="reset_tag_value_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope"></a>

```python
def reset_tag_value_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput">excluded_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput">resource_id_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput">resource_types_scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput">rule_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput">tag_key_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput">tag_value_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts"></a>

```python
timeouts: ConfigOrganizationManagedRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `excluded_accounts_input`<sup>Optional</sup> <a name="excluded_accounts_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput"></a>

```python
excluded_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_id_scope_input`<sup>Optional</sup> <a name="resource_id_scope_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput"></a>

```python
resource_id_scope_input: str
```

- *Type:* str

---

##### `resource_types_scope_input`<sup>Optional</sup> <a name="resource_types_scope_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput"></a>

```python
resource_types_scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_identifier_input`<sup>Optional</sup> <a name="rule_identifier_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput"></a>

```python
rule_identifier_input: str
```

- *Type:* str

---

##### `tag_key_scope_input`<sup>Optional</sup> <a name="tag_key_scope_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput"></a>

```python
tag_key_scope_input: str
```

- *Type:* str

---

##### `tag_value_scope_input`<sup>Optional</sup> <a name="tag_value_scope_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput"></a>

```python
tag_value_scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ConfigOrganizationManagedRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_identifier`<sup>Required</sup> <a name="rule_identifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationManagedRuleConfig <a name="ConfigOrganizationManagedRuleConfig" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule_identifier: str,
  description: str = None,
  excluded_accounts: typing.List[str] = None,
  id: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None,
  timeouts: ConfigOrganizationManagedRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters">input_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}.

---

##### `rule_identifier`<sup>Required</sup> <a name="rule_identifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}.

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}.

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}.

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}.

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}.

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts"></a>

```python
timeouts: ConfigOrganizationManagedRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#timeouts ConfigOrganizationManagedRule#timeouts}

---

### ConfigOrganizationManagedRuleTimeouts <a name="ConfigOrganizationManagedRuleTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationManagedRuleTimeoutsOutputReference <a name="ConfigOrganizationManagedRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_managed_rule

configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConfigOrganizationManagedRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>, cdktf.IResolvable]

---



