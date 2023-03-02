# `dataAwsCeCostCategory` Submodule <a name="`dataAwsCeCostCategory` Submodule" id="@cdktf/provider-aws.dataAwsCeCostCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeCostCategory <a name="DataAwsCeCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category aws_ce_cost_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cost_category_arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.costCategoryArn">cost_category_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#id DataAwsCeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#tags DataAwsCeCostCategory#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cost_category_arn`<sup>Required</sup> <a name="cost_category_arn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.costCategoryArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#id DataAwsCeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#tags DataAwsCeCostCategory#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategory.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveEnd">effective_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveStart">effective_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList">DataAwsCeCostCategoryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.ruleVersion">rule_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.splitChargeRule">split_charge_rule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList">DataAwsCeCostCategorySplitChargeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArnInput">cost_category_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArn">cost_category_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `effective_end`<sup>Required</sup> <a name="effective_end" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveEnd"></a>

```python
effective_end: str
```

- *Type:* str

---

##### `effective_start`<sup>Required</sup> <a name="effective_start" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveStart"></a>

```python
effective_start: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.rule"></a>

```python
rule: DataAwsCeCostCategoryRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList">DataAwsCeCostCategoryRuleList</a>

---

##### `rule_version`<sup>Required</sup> <a name="rule_version" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.ruleVersion"></a>

```python
rule_version: str
```

- *Type:* str

---

##### `split_charge_rule`<sup>Required</sup> <a name="split_charge_rule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.splitChargeRule"></a>

```python
split_charge_rule: DataAwsCeCostCategorySplitChargeRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList">DataAwsCeCostCategorySplitChargeRuleList</a>

---

##### `cost_category_arn_input`<sup>Optional</sup> <a name="cost_category_arn_input" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArnInput"></a>

```python
cost_category_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cost_category_arn`<sup>Required</sup> <a name="cost_category_arn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArn"></a>

```python
cost_category_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeCostCategoryConfig <a name="DataAwsCeCostCategoryConfig" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cost_category_arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.costCategoryArn">cost_category_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#id DataAwsCeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#tags DataAwsCeCostCategory#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cost_category_arn`<sup>Required</sup> <a name="cost_category_arn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.costCategoryArn"></a>

```python
cost_category_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#id DataAwsCeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#tags DataAwsCeCostCategory#tags}.

---

### DataAwsCeCostCategoryRule <a name="DataAwsCeCostCategoryRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRule()
```


### DataAwsCeCostCategoryRuleInheritedValue <a name="DataAwsCeCostCategoryRuleInheritedValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue()
```


### DataAwsCeCostCategoryRuleRule <a name="DataAwsCeCostCategoryRuleRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule()
```


### DataAwsCeCostCategoryRuleRuleAnd <a name="DataAwsCeCostCategoryRuleRuleAnd" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd()
```


### DataAwsCeCostCategoryRuleRuleAndCostCategory <a name="DataAwsCeCostCategoryRuleRuleAndCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory()
```


### DataAwsCeCostCategoryRuleRuleAndDimension <a name="DataAwsCeCostCategoryRuleRuleAndDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension()
```


### DataAwsCeCostCategoryRuleRuleAndTags <a name="DataAwsCeCostCategoryRuleRuleAndTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags()
```


### DataAwsCeCostCategoryRuleRuleCostCategory <a name="DataAwsCeCostCategoryRuleRuleCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory()
```


### DataAwsCeCostCategoryRuleRuleDimension <a name="DataAwsCeCostCategoryRuleRuleDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension()
```


### DataAwsCeCostCategoryRuleRuleNot <a name="DataAwsCeCostCategoryRuleRuleNot" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot()
```


### DataAwsCeCostCategoryRuleRuleNotCostCategory <a name="DataAwsCeCostCategoryRuleRuleNotCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory()
```


### DataAwsCeCostCategoryRuleRuleNotDimension <a name="DataAwsCeCostCategoryRuleRuleNotDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension()
```


### DataAwsCeCostCategoryRuleRuleNotTags <a name="DataAwsCeCostCategoryRuleRuleNotTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags()
```


### DataAwsCeCostCategoryRuleRuleOr <a name="DataAwsCeCostCategoryRuleRuleOr" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr()
```


### DataAwsCeCostCategoryRuleRuleOrCostCategory <a name="DataAwsCeCostCategoryRuleRuleOrCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory()
```


### DataAwsCeCostCategoryRuleRuleOrDimension <a name="DataAwsCeCostCategoryRuleRuleOrDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension()
```


### DataAwsCeCostCategoryRuleRuleOrTags <a name="DataAwsCeCostCategoryRuleRuleOrTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags()
```


### DataAwsCeCostCategoryRuleRuleTags <a name="DataAwsCeCostCategoryRuleRuleTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags()
```


### DataAwsCeCostCategorySplitChargeRule <a name="DataAwsCeCostCategorySplitChargeRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule()
```


### DataAwsCeCostCategorySplitChargeRuleParameter <a name="DataAwsCeCostCategorySplitChargeRuleParameter" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeCostCategoryRuleInheritedValueList <a name="DataAwsCeCostCategoryRuleInheritedValueList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleInheritedValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleInheritedValueOutputReference <a name="DataAwsCeCostCategoryRuleInheritedValueOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey">dimension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue">DataAwsCeCostCategoryRuleInheritedValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_key`<sup>Required</sup> <a name="dimension_key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey"></a>

```python
dimension_key: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleInheritedValue
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue">DataAwsCeCostCategoryRuleInheritedValue</a>

---


### DataAwsCeCostCategoryRuleList <a name="DataAwsCeCostCategoryRuleList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleOutputReference <a name="DataAwsCeCostCategoryRuleOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.inheritedValue">inherited_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList">DataAwsCeCostCategoryRuleInheritedValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList">DataAwsCeCostCategoryRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule">DataAwsCeCostCategoryRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inherited_value`<sup>Required</sup> <a name="inherited_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.inheritedValue"></a>

```python
inherited_value: DataAwsCeCostCategoryRuleInheritedValueList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList">DataAwsCeCostCategoryRuleInheritedValueList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.rule"></a>

```python
rule: DataAwsCeCostCategoryRuleRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList">DataAwsCeCostCategoryRuleRuleList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule">DataAwsCeCostCategoryRule</a>

---


### DataAwsCeCostCategoryRuleRuleAndCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleAndCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory">DataAwsCeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory">DataAwsCeCostCategoryRuleRuleAndCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleAndDimensionList <a name="DataAwsCeCostCategoryRuleRuleAndDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension">DataAwsCeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension">DataAwsCeCostCategoryRuleRuleAndDimension</a>

---


### DataAwsCeCostCategoryRuleRuleAndList <a name="DataAwsCeCostCategoryRuleRuleAndList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleAndOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList">DataAwsCeCostCategoryRuleRuleAndCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList">DataAwsCeCostCategoryRuleRuleAndDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList">DataAwsCeCostCategoryRuleRuleAndTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd">DataAwsCeCostCategoryRuleRuleAnd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeCostCategoryRuleRuleAndCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList">DataAwsCeCostCategoryRuleRuleAndCostCategoryList</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeCostCategoryRuleRuleAndDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList">DataAwsCeCostCategoryRuleRuleAndDimensionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.tags"></a>

```python
tags: DataAwsCeCostCategoryRuleRuleAndTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList">DataAwsCeCostCategoryRuleRuleAndTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleAnd
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd">DataAwsCeCostCategoryRuleRuleAnd</a>

---


### DataAwsCeCostCategoryRuleRuleAndTagsList <a name="DataAwsCeCostCategoryRuleRuleAndTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleAndTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleAndTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags">DataAwsCeCostCategoryRuleRuleAndTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags">DataAwsCeCostCategoryRuleRuleAndTags</a>

---


### DataAwsCeCostCategoryRuleRuleCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory">DataAwsCeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory">DataAwsCeCostCategoryRuleRuleCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleDimensionList <a name="DataAwsCeCostCategoryRuleRuleDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension">DataAwsCeCostCategoryRuleRuleDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension">DataAwsCeCostCategoryRuleRuleDimension</a>

---


### DataAwsCeCostCategoryRuleRuleList <a name="DataAwsCeCostCategoryRuleRuleList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleNotCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleNotCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory">DataAwsCeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory">DataAwsCeCostCategoryRuleRuleNotCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleNotDimensionList <a name="DataAwsCeCostCategoryRuleRuleNotDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension">DataAwsCeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension">DataAwsCeCostCategoryRuleRuleNotDimension</a>

---


### DataAwsCeCostCategoryRuleRuleNotList <a name="DataAwsCeCostCategoryRuleRuleNotList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleNotOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList">DataAwsCeCostCategoryRuleRuleNotCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList">DataAwsCeCostCategoryRuleRuleNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList">DataAwsCeCostCategoryRuleRuleNotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot">DataAwsCeCostCategoryRuleRuleNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeCostCategoryRuleRuleNotCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList">DataAwsCeCostCategoryRuleRuleNotCostCategoryList</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeCostCategoryRuleRuleNotDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList">DataAwsCeCostCategoryRuleRuleNotDimensionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.tags"></a>

```python
tags: DataAwsCeCostCategoryRuleRuleNotTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList">DataAwsCeCostCategoryRuleRuleNotTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot">DataAwsCeCostCategoryRuleRuleNot</a>

---


### DataAwsCeCostCategoryRuleRuleNotTagsList <a name="DataAwsCeCostCategoryRuleRuleNotTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleNotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleNotTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags">DataAwsCeCostCategoryRuleRuleNotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags">DataAwsCeCostCategoryRuleRuleNotTags</a>

---


### DataAwsCeCostCategoryRuleRuleOrCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleOrCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory">DataAwsCeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory">DataAwsCeCostCategoryRuleRuleOrCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleOrDimensionList <a name="DataAwsCeCostCategoryRuleRuleOrDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension">DataAwsCeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension">DataAwsCeCostCategoryRuleRuleOrDimension</a>

---


### DataAwsCeCostCategoryRuleRuleOrList <a name="DataAwsCeCostCategoryRuleRuleOrList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleOrOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList">DataAwsCeCostCategoryRuleRuleOrCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList">DataAwsCeCostCategoryRuleRuleOrDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList">DataAwsCeCostCategoryRuleRuleOrTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr">DataAwsCeCostCategoryRuleRuleOr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeCostCategoryRuleRuleOrCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList">DataAwsCeCostCategoryRuleRuleOrCostCategoryList</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeCostCategoryRuleRuleOrDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList">DataAwsCeCostCategoryRuleRuleOrDimensionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.tags"></a>

```python
tags: DataAwsCeCostCategoryRuleRuleOrTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList">DataAwsCeCostCategoryRuleRuleOrTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleOr
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr">DataAwsCeCostCategoryRuleRuleOr</a>

---


### DataAwsCeCostCategoryRuleRuleOrTagsList <a name="DataAwsCeCostCategoryRuleRuleOrTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleOrTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleOrTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags">DataAwsCeCostCategoryRuleRuleOrTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags">DataAwsCeCostCategoryRuleRuleOrTags</a>

---


### DataAwsCeCostCategoryRuleRuleOutputReference <a name="DataAwsCeCostCategoryRuleRuleOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList">DataAwsCeCostCategoryRuleRuleAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList">DataAwsCeCostCategoryRuleRuleCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList">DataAwsCeCostCategoryRuleRuleDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList">DataAwsCeCostCategoryRuleRuleNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList">DataAwsCeCostCategoryRuleRuleOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList">DataAwsCeCostCategoryRuleRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule">DataAwsCeCostCategoryRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.and"></a>

```python
and: DataAwsCeCostCategoryRuleRuleAndList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList">DataAwsCeCostCategoryRuleRuleAndList</a>

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeCostCategoryRuleRuleCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList">DataAwsCeCostCategoryRuleRuleCostCategoryList</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeCostCategoryRuleRuleDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList">DataAwsCeCostCategoryRuleRuleDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.not"></a>

```python
not: DataAwsCeCostCategoryRuleRuleNotList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList">DataAwsCeCostCategoryRuleRuleNotList</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.or"></a>

```python
or: DataAwsCeCostCategoryRuleRuleOrList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList">DataAwsCeCostCategoryRuleRuleOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.tags"></a>

```python
tags: DataAwsCeCostCategoryRuleRuleTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList">DataAwsCeCostCategoryRuleRuleTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule">DataAwsCeCostCategoryRuleRule</a>

---


### DataAwsCeCostCategoryRuleRuleTagsList <a name="DataAwsCeCostCategoryRuleRuleTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategoryRuleRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategoryRuleRuleTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags">DataAwsCeCostCategoryRuleRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategoryRuleRuleTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags">DataAwsCeCostCategoryRuleRuleTags</a>

---


### DataAwsCeCostCategorySplitChargeRuleList <a name="DataAwsCeCostCategorySplitChargeRuleList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategorySplitChargeRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategorySplitChargeRuleOutputReference <a name="DataAwsCeCostCategorySplitChargeRuleOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList">DataAwsCeCostCategorySplitChargeRuleParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule">DataAwsCeCostCategorySplitChargeRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.parameter"></a>

```python
parameter: DataAwsCeCostCategorySplitChargeRuleParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList">DataAwsCeCostCategorySplitChargeRuleParameterList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategorySplitChargeRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule">DataAwsCeCostCategorySplitChargeRule</a>

---


### DataAwsCeCostCategorySplitChargeRuleParameterList <a name="DataAwsCeCostCategorySplitChargeRuleParameterList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeCostCategorySplitChargeRuleParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCeCostCategorySplitChargeRuleParameterOutputReference <a name="DataAwsCeCostCategorySplitChargeRuleParameterOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_cost_category

dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter">DataAwsCeCostCategorySplitChargeRuleParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeCostCategorySplitChargeRuleParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter">DataAwsCeCostCategorySplitChargeRuleParameter</a>

---



