# `accessanalyzerArchiveRule` Submodule <a name="`accessanalyzerArchiveRule` Submodule" id="@cdktf/provider-aws.accessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerArchiveRule <a name="AccessanalyzerArchiveRule" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule aws_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  analyzer_name: str,
  filter: typing.Union[typing.List[AccessanalyzerArchiveRuleFilter], IResolvable],
  rule_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.analyzerName">analyzer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.analyzerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.filter"></a>

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.ruleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter"></a>

```python
def put_filter(
  value: typing.Union[typing.List[AccessanalyzerArchiveRuleFilter], IResolvable]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter.parameter.value"></a>

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList">AccessanalyzerArchiveRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput">analyzer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput">filter_input</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName">analyzer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter"></a>

```python
filter: AccessanalyzerArchiveRuleFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList">AccessanalyzerArchiveRuleFilterList</a>

---

##### `analyzer_name_input`<sup>Optional</sup> <a name="analyzer_name_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput"></a>

```python
analyzer_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput"></a>

```python
filter_input: typing.Union[typing.List[AccessanalyzerArchiveRuleFilter], IResolvable]
```

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName"></a>

```python
analyzer_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerArchiveRuleConfig <a name="AccessanalyzerArchiveRuleConfig" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  analyzer_name: str,
  filter: typing.Union[typing.List[AccessanalyzerArchiveRuleFilter], IResolvable],
  rule_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName">analyzer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter">filter</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName"></a>

```python
analyzer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter"></a>

```python
filter: typing.Union[typing.List[AccessanalyzerArchiveRuleFilter], IResolvable]
```

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AccessanalyzerArchiveRuleFilter <a name="AccessanalyzerArchiveRuleFilter" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter(
  criteria: str,
  contains: typing.List[str] = None,
  eq: typing.List[str] = None,
  exists: str = None,
  neq: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.criteria">criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#criteria AccessanalyzerArchiveRule#criteria}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains">contains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq">eq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists">exists</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq">neq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#criteria AccessanalyzerArchiveRule#criteria}.

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains"></a>

```python
contains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}.

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}.

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists"></a>

```python
exists: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerArchiveRuleFilterList <a name="AccessanalyzerArchiveRuleFilterList" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessanalyzerArchiveRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[typing.List[AccessanalyzerArchiveRuleFilter], IResolvable]
```

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>], cdktf.IResolvable]

---


### AccessanalyzerArchiveRuleFilterOutputReference <a name="AccessanalyzerArchiveRuleFilterOutputReference" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq">reset_eq</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists">reset_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq">reset_neq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_eq` <a name="reset_eq" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq"></a>

```python
def reset_eq() -> None
```

##### `reset_exists` <a name="reset_exists" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists"></a>

```python
def reset_exists() -> None
```

##### `reset_neq` <a name="reset_neq" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq"></a>

```python
def reset_neq() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput">contains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteriaInput">criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput">eq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput">exists_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput">neq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains">contains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteria">criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists">exists</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput"></a>

```python
contains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteriaInput"></a>

```python
criteria_input: str
```

- *Type:* str

---

##### `eq_input`<sup>Optional</sup> <a name="eq_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput"></a>

```python
eq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exists_input`<sup>Optional</sup> <a name="exists_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput"></a>

```python
exists_input: str
```

- *Type:* str

---

##### `neq_input`<sup>Optional</sup> <a name="neq_input" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput"></a>

```python
neq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```python
contains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```python
exists: str
```

- *Type:* str

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessanalyzerArchiveRuleFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>, cdktf.IResolvable]

---



