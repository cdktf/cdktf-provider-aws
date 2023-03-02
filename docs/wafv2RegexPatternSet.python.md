# `wafv2RegexPatternSet` Submodule <a name="`wafv2RegexPatternSet` Submodule" id="@cdktf/provider-aws.wafv2RegexPatternSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RegexPatternSet <a name="Wafv2RegexPatternSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet(
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
  scope: str,
  description: str = None,
  id: str = None,
  regular_expression: typing.Union[IResolvable, typing.List[Wafv2RegexPatternSetRegularExpression]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.regularExpression">regular_expression</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]</code> | regular_expression block. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regular_expression`<sup>Optional</sup> <a name="regular_expression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.regularExpression"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]

regular_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regular_expression Wafv2RegexPatternSet#regular_expression}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression">put_regular_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetRegularExpression">reset_regular_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_regular_expression` <a name="put_regular_expression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression"></a>

```python
def put_regular_expression(
  value: typing.Union[IResolvable, typing.List[Wafv2RegexPatternSetRegularExpression]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_regular_expression` <a name="reset_regular_expression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetRegularExpression"></a>

```python
def reset_regular_expression() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lockToken">lock_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpression">regular_expression</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList">Wafv2RegexPatternSetRegularExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionInput">regular_expression_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `lock_token`<sup>Required</sup> <a name="lock_token" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lockToken"></a>

```python
lock_token: str
```

- *Type:* str

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpression"></a>

```python
regular_expression: Wafv2RegexPatternSetRegularExpressionList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList">Wafv2RegexPatternSetRegularExpressionList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regular_expression_input`<sup>Optional</sup> <a name="regular_expression_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionInput"></a>

```python
regular_expression_input: typing.Union[IResolvable, typing.List[Wafv2RegexPatternSetRegularExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RegexPatternSetConfig <a name="Wafv2RegexPatternSetConfig" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scope: str,
  description: str = None,
  id: str = None,
  regular_expression: typing.Union[IResolvable, typing.List[Wafv2RegexPatternSetRegularExpression]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpression">regular_expression</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]</code> | regular_expression block. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regular_expression`<sup>Optional</sup> <a name="regular_expression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpression"></a>

```python
regular_expression: typing.Union[IResolvable, typing.List[Wafv2RegexPatternSetRegularExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]

regular_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regular_expression Wafv2RegexPatternSet#regular_expression}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}.

---

### Wafv2RegexPatternSetRegularExpression <a name="Wafv2RegexPatternSetRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression(
  regex_string: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.property.regexString">regex_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}. |

---

##### `regex_string`<sup>Required</sup> <a name="regex_string" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.property.regexString"></a>

```python
regex_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RegexPatternSetRegularExpressionList <a name="Wafv2RegexPatternSetRegularExpressionList" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RegexPatternSetRegularExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2RegexPatternSetRegularExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>]]

---


### Wafv2RegexPatternSetRegularExpressionOutputReference <a name="Wafv2RegexPatternSetRegularExpressionOutputReference" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexStringInput">regex_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexString">regex_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_string_input`<sup>Optional</sup> <a name="regex_string_input" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexStringInput"></a>

```python
regex_string_input: str
```

- *Type:* str

---

##### `regex_string`<sup>Required</sup> <a name="regex_string" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexString"></a>

```python
regex_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Wafv2RegexPatternSetRegularExpression, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>, cdktf.IResolvable]

---



