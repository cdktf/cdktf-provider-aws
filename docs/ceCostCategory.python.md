# `ceCostCategory` Submodule <a name="`ceCostCategory` Submodule" id="@cdktf/provider-aws.ceCostCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeCostCategory <a name="CeCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category aws_ce_cost_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategory(
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
  rule: typing.Union[IResolvable, typing.List[CeCostCategoryRule]],
  rule_version: str,
  default_value: str = None,
  effective_start: str = None,
  id: str = None,
  split_charge_rule: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.ruleVersion">rule_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.effectiveStart">effective_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.splitChargeRule">split_charge_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]</code> | split_charge_rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `rule_version`<sup>Required</sup> <a name="rule_version" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.ruleVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.defaultValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}.

---

##### `effective_start`<sup>Optional</sup> <a name="effective_start" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.effectiveStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `split_charge_rule`<sup>Optional</sup> <a name="split_charge_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.splitChargeRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]

split_charge_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule">put_split_charge_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetEffectiveStart">reset_effective_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetSplitChargeRule">reset_split_charge_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[CeCostCategoryRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]

---

##### `put_split_charge_rule` <a name="put_split_charge_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule"></a>

```python
def put_split_charge_rule(
  value: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_effective_start` <a name="reset_effective_start" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetEffectiveStart"></a>

```python
def reset_effective_start() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_split_charge_rule` <a name="reset_split_charge_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetSplitChargeRule"></a>

```python
def reset_split_charge_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveEnd">effective_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList">CeCostCategoryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRule">split_charge_rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList">CeCostCategorySplitChargeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStartInput">effective_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersionInput">rule_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRuleInput">split_charge_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStart">effective_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersion">rule_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `effective_end`<sup>Required</sup> <a name="effective_end" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveEnd"></a>

```python
effective_end: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.rule"></a>

```python
rule: CeCostCategoryRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList">CeCostCategoryRuleList</a>

---

##### `split_charge_rule`<sup>Required</sup> <a name="split_charge_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRule"></a>

```python
split_charge_rule: CeCostCategorySplitChargeRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList">CeCostCategorySplitChargeRuleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `effective_start_input`<sup>Optional</sup> <a name="effective_start_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStartInput"></a>

```python
effective_start_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[CeCostCategoryRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]

---

##### `rule_version_input`<sup>Optional</sup> <a name="rule_version_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersionInput"></a>

```python
rule_version_input: str
```

- *Type:* str

---

##### `split_charge_rule_input`<sup>Optional</sup> <a name="split_charge_rule_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRuleInput"></a>

```python
split_charge_rule_input: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `effective_start`<sup>Required</sup> <a name="effective_start" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStart"></a>

```python
effective_start: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_version`<sup>Required</sup> <a name="rule_version" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersion"></a>

```python
rule_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CeCostCategoryConfig <a name="CeCostCategoryConfig" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule: typing.Union[IResolvable, typing.List[CeCostCategoryRule]],
  rule_version: str,
  default_value: str = None,
  effective_start: str = None,
  id: str = None,
  split_charge_rule: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.ruleVersion">rule_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.effectiveStart">effective_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.splitChargeRule">split_charge_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]</code> | split_charge_rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[CeCostCategoryRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `rule_version`<sup>Required</sup> <a name="rule_version" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.ruleVersion"></a>

```python
rule_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}.

---

##### `effective_start`<sup>Optional</sup> <a name="effective_start" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.effectiveStart"></a>

```python
effective_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `split_charge_rule`<sup>Optional</sup> <a name="split_charge_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.splitChargeRule"></a>

```python
split_charge_rule: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]

split_charge_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}.

---

### CeCostCategoryRule <a name="CeCostCategoryRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRule(
  inherited_value: CeCostCategoryRuleInheritedValue = None,
  rule: CeCostCategoryRuleRule = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.inheritedValue">inherited_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | inherited_value block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#value CeCostCategory#value}. |

---

##### `inherited_value`<sup>Optional</sup> <a name="inherited_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.inheritedValue"></a>

```python
inherited_value: CeCostCategoryRuleInheritedValue
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

inherited_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#inherited_value CeCostCategory#inherited_value}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.rule"></a>

```python
rule: CeCostCategoryRuleRule
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#value CeCostCategory#value}.

---

### CeCostCategoryRuleInheritedValue <a name="CeCostCategoryRuleInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleInheritedValue(
  dimension_key: str = None,
  dimension_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionKey">dimension_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionName">dimension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}. |

---

##### `dimension_key`<sup>Optional</sup> <a name="dimension_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionKey"></a>

```python
dimension_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}.

---

##### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}.

---

### CeCostCategoryRuleRule <a name="CeCostCategoryRuleRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRule(
  and: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleAnd]] = None,
  cost_category: CeCostCategoryRuleRuleCostCategory = None,
  dimension: CeCostCategoryRuleRuleDimension = None,
  not: CeCostCategoryRuleRuleNot = None,
  or: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleOr]] = None,
  tags: CeCostCategoryRuleRuleTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.and">and</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]</code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.or">or</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]</code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.and"></a>

```python
and: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#and CeCostCategory#and}

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.not"></a>

```python
not: CeCostCategoryRuleRuleNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#not CeCostCategory#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.or"></a>

```python
or: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#or CeCostCategory#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleAnd <a name="CeCostCategoryRuleRuleAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAnd(
  cost_category: CeCostCategoryRuleRuleAndCostCategory = None,
  dimension: CeCostCategoryRuleRuleAndDimension = None,
  tags: CeCostCategoryRuleRuleAndTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleAndCostCategory <a name="CeCostCategoryRuleRuleAndCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleAndDimension <a name="CeCostCategoryRuleRuleAndDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleAndTags <a name="CeCostCategoryRuleRuleAndTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleCostCategory <a name="CeCostCategoryRuleRuleCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleDimension <a name="CeCostCategoryRuleRuleDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNot <a name="CeCostCategoryRuleRuleNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNot(
  cost_category: CeCostCategoryRuleRuleNotCostCategory = None,
  dimension: CeCostCategoryRuleRuleNotDimension = None,
  tags: CeCostCategoryRuleRuleNotTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleNotCostCategory <a name="CeCostCategoryRuleRuleNotCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNotDimension <a name="CeCostCategoryRuleRuleNotDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNotTags <a name="CeCostCategoryRuleRuleNotTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOr <a name="CeCostCategoryRuleRuleOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOr(
  cost_category: CeCostCategoryRuleRuleOrCostCategory = None,
  dimension: CeCostCategoryRuleRuleOrDimension = None,
  tags: CeCostCategoryRuleRuleOrTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleOrCostCategory <a name="CeCostCategoryRuleRuleOrCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOrDimension <a name="CeCostCategoryRuleRuleOrDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOrTags <a name="CeCostCategoryRuleRuleOrTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleTags <a name="CeCostCategoryRuleRuleTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategorySplitChargeRule <a name="CeCostCategorySplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategorySplitChargeRule(
  method: str,
  source: str,
  targets: typing.List[str],
  parameter: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRuleParameter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#method CeCostCategory#method}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#source CeCostCategory#source}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#targets CeCostCategory#targets}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]</code> | parameter block. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#method CeCostCategory#method}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#source CeCostCategory#source}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#targets CeCostCategory#targets}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRuleParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#parameter CeCostCategory#parameter}

---

### CeCostCategorySplitChargeRuleParameter <a name="CeCostCategorySplitChargeRuleParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategorySplitChargeRuleParameter(
  type: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeCostCategoryRuleInheritedValueOutputReference <a name="CeCostCategoryRuleInheritedValueOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionKey">reset_dimension_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionName">reset_dimension_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dimension_key` <a name="reset_dimension_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionKey"></a>

```python
def reset_dimension_key() -> None
```

##### `reset_dimension_name` <a name="reset_dimension_name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionName"></a>

```python
def reset_dimension_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKeyInput">dimension_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey">dimension_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_key_input`<sup>Optional</sup> <a name="dimension_key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKeyInput"></a>

```python
dimension_key_input: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `dimension_key`<sup>Required</sup> <a name="dimension_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey"></a>

```python
dimension_key: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleInheritedValue
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---


### CeCostCategoryRuleList <a name="CeCostCategoryRuleList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeCostCategoryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeCostCategoryRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>]]

---


### CeCostCategoryRuleOutputReference <a name="CeCostCategoryRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue">put_inherited_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetInheritedValue">reset_inherited_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inherited_value` <a name="put_inherited_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue"></a>

```python
def put_inherited_value(
  dimension_key: str = None,
  dimension_name: str = None
) -> None
```

###### `dimension_key`<sup>Optional</sup> <a name="dimension_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue.parameter.dimensionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}.

---

###### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue.parameter.dimensionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}.

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule"></a>

```python
def put_rule(
  and: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleAnd]] = None,
  cost_category: CeCostCategoryRuleRuleCostCategory = None,
  dimension: CeCostCategoryRuleRuleDimension = None,
  not: CeCostCategoryRuleRuleNot = None,
  or: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleOr]] = None,
  tags: CeCostCategoryRuleRuleTags = None
) -> None
```

###### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.and"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#and CeCostCategory#and}

---

###### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.costCategory"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

###### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.not"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#not CeCostCategory#not}

---

###### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.or"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#or CeCostCategory#or}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

##### `reset_inherited_value` <a name="reset_inherited_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetInheritedValue"></a>

```python
def reset_inherited_value() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValue">inherited_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference">CeCostCategoryRuleInheritedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference">CeCostCategoryRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValueInput">inherited_value_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.ruleInput">rule_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inherited_value`<sup>Required</sup> <a name="inherited_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValue"></a>

```python
inherited_value: CeCostCategoryRuleInheritedValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference">CeCostCategoryRuleInheritedValueOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.rule"></a>

```python
rule: CeCostCategoryRuleRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference">CeCostCategoryRuleRuleOutputReference</a>

---

##### `inherited_value_input`<sup>Optional</sup> <a name="inherited_value_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValueInput"></a>

```python
inherited_value_input: CeCostCategoryRuleInheritedValue
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.ruleInput"></a>

```python
rule_input: CeCostCategoryRuleRule
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeCostCategoryRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>, cdktf.IResolvable]

---


### CeCostCategoryRuleRuleAndCostCategoryOutputReference <a name="CeCostCategoryRuleRuleAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---


### CeCostCategoryRuleRuleAndDimensionOutputReference <a name="CeCostCategoryRuleRuleAndDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---


### CeCostCategoryRuleRuleAndList <a name="CeCostCategoryRuleRuleAndList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeCostCategoryRuleRuleAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]

---


### CeCostCategoryRuleRuleAndOutputReference <a name="CeCostCategoryRuleRuleAndOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference">CeCostCategoryRuleRuleAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference">CeCostCategoryRuleRuleAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference">CeCostCategoryRuleRuleAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleAndCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference">CeCostCategoryRuleRuleAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleAndDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference">CeCostCategoryRuleRuleAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleAndTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference">CeCostCategoryRuleRuleAndTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeCostCategoryRuleRuleAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeCostCategoryRuleRuleAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tagsInput"></a>

```python
tags_input: CeCostCategoryRuleRuleAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeCostCategoryRuleRuleAnd, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>, cdktf.IResolvable]

---


### CeCostCategoryRuleRuleAndTagsOutputReference <a name="CeCostCategoryRuleRuleAndTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---


### CeCostCategoryRuleRuleCostCategoryOutputReference <a name="CeCostCategoryRuleRuleCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---


### CeCostCategoryRuleRuleDimensionOutputReference <a name="CeCostCategoryRuleRuleDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---


### CeCostCategoryRuleRuleNotCostCategoryOutputReference <a name="CeCostCategoryRuleRuleNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---


### CeCostCategoryRuleRuleNotDimensionOutputReference <a name="CeCostCategoryRuleRuleNotDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---


### CeCostCategoryRuleRuleNotOutputReference <a name="CeCostCategoryRuleRuleNotOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference">CeCostCategoryRuleRuleNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference">CeCostCategoryRuleRuleNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference">CeCostCategoryRuleRuleNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleNotCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference">CeCostCategoryRuleRuleNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference">CeCostCategoryRuleRuleNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleNotTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference">CeCostCategoryRuleRuleNotTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeCostCategoryRuleRuleNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeCostCategoryRuleRuleNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tagsInput"></a>

```python
tags_input: CeCostCategoryRuleRuleNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---


### CeCostCategoryRuleRuleNotTagsOutputReference <a name="CeCostCategoryRuleRuleNotTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---


### CeCostCategoryRuleRuleOrCostCategoryOutputReference <a name="CeCostCategoryRuleRuleOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---


### CeCostCategoryRuleRuleOrDimensionOutputReference <a name="CeCostCategoryRuleRuleOrDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---


### CeCostCategoryRuleRuleOrList <a name="CeCostCategoryRuleRuleOrList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeCostCategoryRuleRuleOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]

---


### CeCostCategoryRuleRuleOrOutputReference <a name="CeCostCategoryRuleRuleOrOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference">CeCostCategoryRuleRuleOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference">CeCostCategoryRuleRuleOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference">CeCostCategoryRuleRuleOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleOrCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference">CeCostCategoryRuleRuleOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleOrDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference">CeCostCategoryRuleRuleOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleOrTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference">CeCostCategoryRuleRuleOrTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeCostCategoryRuleRuleOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeCostCategoryRuleRuleOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tagsInput"></a>

```python
tags_input: CeCostCategoryRuleRuleOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeCostCategoryRuleRuleOr, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>, cdktf.IResolvable]

---


### CeCostCategoryRuleRuleOrTagsOutputReference <a name="CeCostCategoryRuleRuleOrTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---


### CeCostCategoryRuleRuleOutputReference <a name="CeCostCategoryRuleRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd">put_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot">put_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr">put_or</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetAnd">reset_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetNot">reset_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetOr">reset_or</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and` <a name="put_and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd"></a>

```python
def put_and(
  value: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleAnd]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]

---

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `put_not` <a name="put_not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot"></a>

```python
def put_not(
  cost_category: CeCostCategoryRuleRuleNotCostCategory = None,
  dimension: CeCostCategoryRuleRuleNotDimension = None,
  tags: CeCostCategoryRuleRuleNotTags = None
) -> None
```

###### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot.parameter.costCategory"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

##### `put_or` <a name="put_or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr"></a>

```python
def put_or(
  value: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleOr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

##### `reset_and` <a name="reset_and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetAnd"></a>

```python
def reset_and() -> None
```

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_not` <a name="reset_not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetNot"></a>

```python
def reset_not() -> None
```

##### `reset_or` <a name="reset_or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetOr"></a>

```python
def reset_or() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList">CeCostCategoryRuleRuleAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference">CeCostCategoryRuleRuleCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference">CeCostCategoryRuleRuleDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference">CeCostCategoryRuleRuleNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList">CeCostCategoryRuleRuleOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference">CeCostCategoryRuleRuleTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.andInput">and_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.notInput">not_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.orInput">or_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.and"></a>

```python
and: CeCostCategoryRuleRuleAndList
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList">CeCostCategoryRuleRuleAndList</a>

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategory"></a>

```python
cost_category: CeCostCategoryRuleRuleCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference">CeCostCategoryRuleRuleCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimension"></a>

```python
dimension: CeCostCategoryRuleRuleDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference">CeCostCategoryRuleRuleDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.not"></a>

```python
not: CeCostCategoryRuleRuleNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference">CeCostCategoryRuleRuleNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.or"></a>

```python
or: CeCostCategoryRuleRuleOrList
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList">CeCostCategoryRuleRuleOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tags"></a>

```python
tags: CeCostCategoryRuleRuleTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference">CeCostCategoryRuleRuleTagsOutputReference</a>

---

##### `and_input`<sup>Optional</sup> <a name="and_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.andInput"></a>

```python
and_input: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>]]

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: CeCostCategoryRuleRuleCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimensionInput"></a>

```python
dimension_input: CeCostCategoryRuleRuleDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---

##### `not_input`<sup>Optional</sup> <a name="not_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.notInput"></a>

```python
not_input: CeCostCategoryRuleRuleNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---

##### `or_input`<sup>Optional</sup> <a name="or_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.orInput"></a>

```python
or_input: typing.Union[IResolvable, typing.List[CeCostCategoryRuleRuleOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tagsInput"></a>

```python
tags_input: CeCostCategoryRuleRuleTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRule
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---


### CeCostCategoryRuleRuleTagsOutputReference <a name="CeCostCategoryRuleRuleTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: CeCostCategoryRuleRuleTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---


### CeCostCategorySplitChargeRuleList <a name="CeCostCategorySplitChargeRuleList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategorySplitChargeRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeCostCategorySplitChargeRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>]]

---


### CeCostCategorySplitChargeRuleOutputReference <a name="CeCostCategorySplitChargeRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategorySplitChargeRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRuleParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]

---

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList">CeCostCategorySplitChargeRuleParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameter"></a>

```python
parameter: CeCostCategorySplitChargeRuleParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList">CeCostCategorySplitChargeRuleParameterList</a>

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRuleParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeCostCategorySplitChargeRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>, cdktf.IResolvable]

---


### CeCostCategorySplitChargeRuleParameterList <a name="CeCostCategorySplitChargeRuleParameterList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategorySplitChargeRuleParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeCostCategorySplitChargeRuleParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CeCostCategorySplitChargeRuleParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>]]

---


### CeCostCategorySplitChargeRuleParameterOutputReference <a name="CeCostCategorySplitChargeRuleParameterOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ce_cost_category

ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CeCostCategorySplitChargeRuleParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>, cdktf.IResolvable]

---



