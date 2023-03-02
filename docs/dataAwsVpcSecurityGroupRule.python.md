# `dataAwsVpcSecurityGroupRule` Submodule <a name="`dataAwsVpcSecurityGroupRule` Submodule" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcSecurityGroupRule <a name="DataAwsVpcSecurityGroupRule" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule aws_vpc_security_group_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcSecurityGroupRuleFilter]] = None,
  security_group_rule_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.securityGroupRuleId">security_group_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#security_group_rule_id DataAwsVpcSecurityGroupRule#security_group_rule_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#filter DataAwsVpcSecurityGroupRule#filter}

---

##### `security_group_rule_id`<sup>Optional</sup> <a name="security_group_rule_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.Initializer.parameter.securityGroupRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#security_group_rule_id DataAwsVpcSecurityGroupRule#security_group_rule_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.resetSecurityGroupRuleId">reset_security_group_rule_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsVpcSecurityGroupRuleFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_security_group_rule_id` <a name="reset_security_group_rule_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.resetSecurityGroupRuleId"></a>

```python
def reset_security_group_rule_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList">DataAwsVpcSecurityGroupRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.isEgress">is_egress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.securityGroupRuleIdInput">security_group_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.securityGroupRuleId">security_group_rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cidr_ipv4`<sup>Required</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.cidrIpv4"></a>

```python
cidr_ipv4: str
```

- *Type:* str

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.filter"></a>

```python
filter: DataAwsVpcSecurityGroupRuleFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList">DataAwsVpcSecurityGroupRuleFilterList</a>

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `is_egress`<sup>Required</sup> <a name="is_egress" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.isEgress"></a>

```python
is_egress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

---

##### `referenced_security_group_id`<sup>Required</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.referencedSecurityGroupId"></a>

```python
referenced_security_group_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsVpcSecurityGroupRuleFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]

---

##### `security_group_rule_id_input`<sup>Optional</sup> <a name="security_group_rule_id_input" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.securityGroupRuleIdInput"></a>

```python
security_group_rule_id_input: str
```

- *Type:* str

---

##### `security_group_rule_id`<sup>Required</sup> <a name="security_group_rule_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.securityGroupRuleId"></a>

```python
security_group_rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcSecurityGroupRuleConfig <a name="DataAwsVpcSecurityGroupRuleConfig" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcSecurityGroupRuleFilter]] = None,
  security_group_rule_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.securityGroupRuleId">security_group_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#security_group_rule_id DataAwsVpcSecurityGroupRule#security_group_rule_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsVpcSecurityGroupRuleFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#filter DataAwsVpcSecurityGroupRule#filter}

---

##### `security_group_rule_id`<sup>Optional</sup> <a name="security_group_rule_id" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleConfig.property.securityGroupRuleId"></a>

```python
security_group_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#security_group_rule_id DataAwsVpcSecurityGroupRule#security_group_rule_id}.

---

### DataAwsVpcSecurityGroupRuleFilter <a name="DataAwsVpcSecurityGroupRuleFilter" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#name DataAwsVpcSecurityGroupRule#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#values DataAwsVpcSecurityGroupRule#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#name DataAwsVpcSecurityGroupRule#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_security_group_rule#values DataAwsVpcSecurityGroupRule#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcSecurityGroupRuleFilterList <a name="DataAwsVpcSecurityGroupRuleFilterList" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcSecurityGroupRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsVpcSecurityGroupRuleFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>]]

---


### DataAwsVpcSecurityGroupRuleFilterOutputReference <a name="DataAwsVpcSecurityGroupRuleFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_security_group_rule

dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcSecurityGroupRuleFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcSecurityGroupRule.DataAwsVpcSecurityGroupRuleFilter">DataAwsVpcSecurityGroupRuleFilter</a>, cdktf.IResolvable]

---



