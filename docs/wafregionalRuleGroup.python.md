# `wafregionalRuleGroup` Submodule <a name="`wafregionalRuleGroup` Submodule" id="@cdktf/provider-aws.wafregionalRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRuleGroup <a name="WafregionalRuleGroup" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group aws_wafregional_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_name: str,
  name: str,
  activated_rule: typing.Union[IResolvable, typing.List[WafregionalRuleGroupActivatedRule]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.activatedRule">activated_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]</code> | activated_rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}.

---

##### `activated_rule`<sup>Optional</sup> <a name="activated_rule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.activatedRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]

activated_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#activated_rule WafregionalRuleGroup#activated_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule">put_activated_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetActivatedRule">reset_activated_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_activated_rule` <a name="put_activated_rule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule"></a>

```python
def put_activated_rule(
  value: typing.Union[IResolvable, typing.List[WafregionalRuleGroupActivatedRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]

---

##### `reset_activated_rule` <a name="reset_activated_rule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetActivatedRule"></a>

```python
def reset_activated_rule() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRule">activated_rule</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList">WafregionalRuleGroupActivatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRuleInput">activated_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activated_rule`<sup>Required</sup> <a name="activated_rule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRule"></a>

```python
activated_rule: WafregionalRuleGroupActivatedRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList">WafregionalRuleGroupActivatedRuleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `activated_rule_input`<sup>Optional</sup> <a name="activated_rule_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRuleInput"></a>

```python
activated_rule_input: typing.Union[IResolvable, typing.List[WafregionalRuleGroupActivatedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRuleGroupActivatedRule <a name="WafregionalRuleGroupActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroupActivatedRule(
  action: WafregionalRuleGroupActivatedRuleAction,
  priority: typing.Union[int, float],
  rule_id: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#priority WafregionalRuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.action"></a>

```python
action: WafregionalRuleGroupActivatedRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#action WafregionalRuleGroup#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#priority WafregionalRuleGroup#priority}.

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

### WafregionalRuleGroupActivatedRuleAction <a name="WafregionalRuleGroupActivatedRuleAction" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

### WafregionalRuleGroupConfig <a name="WafregionalRuleGroupConfig" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_name: str,
  name: str,
  activated_rule: typing.Union[IResolvable, typing.List[WafregionalRuleGroupActivatedRule]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.activatedRule">activated_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]</code> | activated_rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}.

---

##### `activated_rule`<sup>Optional</sup> <a name="activated_rule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.activatedRule"></a>

```python
activated_rule: typing.Union[IResolvable, typing.List[WafregionalRuleGroupActivatedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]

activated_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#activated_rule WafregionalRuleGroup#activated_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRuleGroupActivatedRuleActionOutputReference <a name="WafregionalRuleGroupActivatedRuleActionOutputReference" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalRuleGroupActivatedRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---


### WafregionalRuleGroupActivatedRuleList <a name="WafregionalRuleGroupActivatedRuleList" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalRuleGroupActivatedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalRuleGroupActivatedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>]]

---


### WafregionalRuleGroupActivatedRuleOutputReference <a name="WafregionalRuleGroupActivatedRuleOutputReference" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rule_group

wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction"></a>

```python
def put_action(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference">WafregionalRuleGroupActivatedRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.action"></a>

```python
action: WafregionalRuleGroupActivatedRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference">WafregionalRuleGroupActivatedRuleActionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.actionInput"></a>

```python
action_input: WafregionalRuleGroupActivatedRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalRuleGroupActivatedRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>, cdktf.IResolvable]

---



