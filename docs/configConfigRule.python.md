# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktf/provider-aws.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule aws_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRule(
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
  source: ConfigConfigRuleSource,
  description: str = None,
  id: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  scope: ConfigConfigRuleScope = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.inputParameters">input_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source ConfigConfigRule#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.inputParameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#scope ConfigConfigRule#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope"></a>

```python
def put_scope(
  compliance_resource_id: str = None,
  compliance_resource_types: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `compliance_resource_id`<sup>Optional</sup> <a name="compliance_resource_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.complianceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}.

---

###### `compliance_resource_types`<sup>Optional</sup> <a name="compliance_resource_types" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.complianceResourceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}.

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}.

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.tagValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource"></a>

```python
def put_source(
  owner: str,
  custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetails = None,
  source_detail: typing.Union[IResolvable, typing.List[ConfigConfigRuleSourceSourceDetail]] = None,
  source_identifier: str = None
) -> None
```

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}.

---

###### `custom_policy_details`<sup>Optional</sup> <a name="custom_policy_details" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.customPolicyDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

custom_policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

###### `source_detail`<sup>Optional</sup> <a name="source_detail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.sourceDetail"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]

source_detail block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_detail ConfigConfigRule#source_detail}

---

###### `source_identifier`<sup>Optional</sup> <a name="source_identifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.sourceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scope"></a>

```python
scope: ConfigConfigRuleScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.source"></a>

```python
source: ConfigConfigRuleSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```python
scope_input: ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```python
source_input: ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  source: ConfigConfigRuleSource,
  description: str = None,
  id: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  scope: ConfigConfigRuleScope = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">input_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```python
source: ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source ConfigConfigRule#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```python
scope: ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#scope ConfigConfigRule#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}.

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleScope(
  compliance_resource_id: str = None,
  compliance_resource_types: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">compliance_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">compliance_resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}. |

---

##### `compliance_resource_id`<sup>Optional</sup> <a name="compliance_resource_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```python
compliance_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}.

---

##### `compliance_resource_types`<sup>Optional</sup> <a name="compliance_resource_types" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```python
compliance_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}.

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}.

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSource(
  owner: str,
  custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetails = None,
  source_detail: typing.Union[IResolvable, typing.List[ConfigConfigRuleSourceSourceDetail]] = None,
  source_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">custom_policy_details</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | custom_policy_details block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail">source_detail</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]</code> | source_detail block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}.

---

##### `custom_policy_details`<sup>Optional</sup> <a name="custom_policy_details" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```python
custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

custom_policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `source_detail`<sup>Optional</sup> <a name="source_detail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail"></a>

```python
source_detail: typing.Union[IResolvable, typing.List[ConfigConfigRuleSourceSourceDetail]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]

source_detail block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_detail ConfigConfigRule#source_detail}

---

##### `source_identifier`<sup>Optional</sup> <a name="source_identifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}.

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails(
  policy_runtime: str,
  policy_text: str,
  enable_debug_log_delivery: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">policy_runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">policy_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">enable_debug_log_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}. |

---

##### `policy_runtime`<sup>Required</sup> <a name="policy_runtime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```python
policy_runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}.

---

##### `policy_text`<sup>Required</sup> <a name="policy_text" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}.

---

##### `enable_debug_log_delivery`<sup>Optional</sup> <a name="enable_debug_log_delivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```python
enable_debug_log_delivery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}.

---

### ConfigConfigRuleSourceSourceDetail <a name="ConfigConfigRuleSourceSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSourceSourceDetail(
  event_source: str = None,
  maximum_execution_frequency: str = None,
  message_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource">event_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#event_source ConfigConfigRule#event_source}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType">message_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#message_type ConfigConfigRule#message_type}. |

---

##### `event_source`<sup>Optional</sup> <a name="event_source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#event_source ConfigConfigRule#event_source}.

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `message_type`<sup>Optional</sup> <a name="message_type" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#message_type ConfigConfigRule#message_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">reset_compliance_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">reset_compliance_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compliance_resource_id` <a name="reset_compliance_resource_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```python
def reset_compliance_resource_id() -> None
```

##### `reset_compliance_resource_types` <a name="reset_compliance_resource_types" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```python
def reset_compliance_resource_types() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">compliance_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">compliance_resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">compliance_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">compliance_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compliance_resource_id_input`<sup>Optional</sup> <a name="compliance_resource_id_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```python
compliance_resource_id_input: str
```

- *Type:* str

---

##### `compliance_resource_types_input`<sup>Optional</sup> <a name="compliance_resource_types_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```python
compliance_resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `compliance_resource_id`<sup>Required</sup> <a name="compliance_resource_id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```python
compliance_resource_id: str
```

- *Type:* str

---

##### `compliance_resource_types`<sup>Required</sup> <a name="compliance_resource_types" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```python
compliance_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```python
internal_value: ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">reset_enable_debug_log_delivery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_debug_log_delivery` <a name="reset_enable_debug_log_delivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```python
def reset_enable_debug_log_delivery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">enable_debug_log_delivery_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">policy_runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">policy_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">enable_debug_log_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">policy_runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">policy_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_debug_log_delivery_input`<sup>Optional</sup> <a name="enable_debug_log_delivery_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```python
enable_debug_log_delivery_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_runtime_input`<sup>Optional</sup> <a name="policy_runtime_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```python
policy_runtime_input: str
```

- *Type:* str

---

##### `policy_text_input`<sup>Optional</sup> <a name="policy_text_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```python
policy_text_input: str
```

- *Type:* str

---

##### `enable_debug_log_delivery`<sup>Required</sup> <a name="enable_debug_log_delivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```python
enable_debug_log_delivery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_runtime`<sup>Required</sup> <a name="policy_runtime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```python
policy_runtime: str
```

- *Type:* str

---

##### `policy_text`<sup>Required</sup> <a name="policy_text" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">put_custom_policy_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail">put_source_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">reset_custom_policy_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail">reset_source_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">reset_source_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_policy_details` <a name="put_custom_policy_details" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```python
def put_custom_policy_details(
  policy_runtime: str,
  policy_text: str,
  enable_debug_log_delivery: typing.Union[bool, IResolvable] = None
) -> None
```

###### `policy_runtime`<sup>Required</sup> <a name="policy_runtime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.policyRuntime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}.

---

###### `policy_text`<sup>Required</sup> <a name="policy_text" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.policyText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}.

---

###### `enable_debug_log_delivery`<sup>Optional</sup> <a name="enable_debug_log_delivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.enableDebugLogDelivery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}.

---

##### `put_source_detail` <a name="put_source_detail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail"></a>

```python
def put_source_detail(
  value: typing.Union[IResolvable, typing.List[ConfigConfigRuleSourceSourceDetail]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]

---

##### `reset_custom_policy_details` <a name="reset_custom_policy_details" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```python
def reset_custom_policy_details() -> None
```

##### `reset_source_detail` <a name="reset_source_detail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail"></a>

```python
def reset_source_detail() -> None
```

##### `reset_source_identifier` <a name="reset_source_identifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```python
def reset_source_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">custom_policy_details</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail">source_detail</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">custom_policy_details_input</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput">source_detail_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_policy_details`<sup>Required</sup> <a name="custom_policy_details" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```python
custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `source_detail`<sup>Required</sup> <a name="source_detail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail"></a>

```python
source_detail: ConfigConfigRuleSourceSourceDetailList
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a>

---

##### `custom_policy_details_input`<sup>Optional</sup> <a name="custom_policy_details_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```python
custom_policy_details_input: ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `source_detail_input`<sup>Optional</sup> <a name="source_detail_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput"></a>

```python
source_detail_input: typing.Union[IResolvable, typing.List[ConfigConfigRuleSourceSourceDetail]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]

---

##### `source_identifier_input`<sup>Optional</sup> <a name="source_identifier_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```python
source_identifier_input: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `source_identifier`<sup>Required</sup> <a name="source_identifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```python
internal_value: ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailList <a name="ConfigConfigRuleSourceSourceDetailList" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSourceSourceDetailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConfigRuleSourceSourceDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigConfigRuleSourceSourceDetail]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>]]

---


### ConfigConfigRuleSourceSourceDetailOutputReference <a name="ConfigConfigRuleSourceSourceDetailOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_config_rule

configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource">reset_event_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType">reset_message_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_source` <a name="reset_event_source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource"></a>

```python
def reset_event_source() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_message_type` <a name="reset_message_type" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType"></a>

```python
def reset_message_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput">event_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource">event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_source_input`<sup>Optional</sup> <a name="event_source_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput"></a>

```python
event_source_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConfigConfigRuleSourceSourceDetail, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>, cdktf.IResolvable]

---



