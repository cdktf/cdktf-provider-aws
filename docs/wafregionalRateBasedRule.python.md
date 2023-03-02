# `wafregionalRateBasedRule` Submodule <a name="`wafregionalRateBasedRule` Submodule" id="@cdktf/provider-aws.wafregionalRateBasedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRateBasedRule <a name="WafregionalRateBasedRule" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule aws_wafregional_rate_based_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRule(
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
  rate_key: str,
  rate_limit: typing.Union[int, float],
  id: str = None,
  predicate: typing.Union[IResolvable, typing.List[WafregionalRateBasedRulePredicate]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateKey">rate_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.predicate">predicate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]</code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}.

---

##### `rate_key`<sup>Required</sup> <a name="rate_key" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}.

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.predicate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#predicate WafregionalRateBasedRule#predicate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetPredicate">reset_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.putPredicate"></a>

```python
def put_predicate(
  value: typing.Union[IResolvable, typing.List[WafregionalRateBasedRulePredicate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.putPredicate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetPredicate"></a>

```python
def reset_predicate() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList">WafregionalRateBasedRulePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicateInput">predicate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKeyInput">rate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimitInput">rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKey">rate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicate"></a>

```python
predicate: WafregionalRateBasedRulePredicateList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList">WafregionalRateBasedRulePredicateList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicateInput"></a>

```python
predicate_input: typing.Union[IResolvable, typing.List[WafregionalRateBasedRulePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]

---

##### `rate_key_input`<sup>Optional</sup> <a name="rate_key_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKeyInput"></a>

```python
rate_key_input: str
```

- *Type:* str

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimitInput"></a>

```python
rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rate_key`<sup>Required</sup> <a name="rate_key" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKey"></a>

```python
rate_key: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRateBasedRuleConfig <a name="WafregionalRateBasedRuleConfig" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_name: str,
  name: str,
  rate_key: str,
  rate_limit: typing.Union[int, float],
  id: str = None,
  predicate: typing.Union[IResolvable, typing.List[WafregionalRateBasedRulePredicate]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateKey">rate_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.predicate">predicate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]</code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}.

---

##### `rate_key`<sup>Required</sup> <a name="rate_key" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateKey"></a>

```python
rate_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}.

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.predicate"></a>

```python
predicate: typing.Union[IResolvable, typing.List[WafregionalRateBasedRulePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#predicate WafregionalRateBasedRule#predicate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}.

---

### WafregionalRateBasedRulePredicate <a name="WafregionalRateBasedRulePredicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRulePredicate(
  data_id: str,
  negated: typing.Union[bool, IResolvable],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.dataId">data_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#data_id WafregionalRateBasedRule#data_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.negated">negated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#negated WafregionalRateBasedRule#negated}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#type WafregionalRateBasedRule#type}. |

---

##### `data_id`<sup>Required</sup> <a name="data_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.dataId"></a>

```python
data_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#data_id WafregionalRateBasedRule#data_id}.

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.negated"></a>

```python
negated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#negated WafregionalRateBasedRule#negated}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#type WafregionalRateBasedRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRateBasedRulePredicateList <a name="WafregionalRateBasedRulePredicateList" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalRateBasedRulePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalRateBasedRulePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>]]

---


### WafregionalRateBasedRulePredicateOutputReference <a name="WafregionalRateBasedRulePredicateOutputReference" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_rate_based_rule

wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataIdInput">data_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negatedInput">negated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataId">data_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negated">negated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_id_input`<sup>Optional</sup> <a name="data_id_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataIdInput"></a>

```python
data_id_input: str
```

- *Type:* str

---

##### `negated_input`<sup>Optional</sup> <a name="negated_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negatedInput"></a>

```python
negated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data_id`<sup>Required</sup> <a name="data_id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataId"></a>

```python
data_id: str
```

- *Type:* str

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negated"></a>

```python
negated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalRateBasedRulePredicate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>, cdktf.IResolvable]

---



