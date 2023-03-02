# `wafregionalRegexMatchSet` Submodule <a name="`wafregionalRegexMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalRegexMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRegexMatchSet <a name="WafregionalRegexMatchSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set aws_wafregional_regex_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSet(
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
  id: str = None,
  regex_match_tuple: typing.Union[IResolvable, typing.List[WafregionalRegexMatchSetRegexMatchTuple]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.regexMatchTuple">regex_match_tuple</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]</code> | regex_match_tuple block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regex_match_tuple`<sup>Optional</sup> <a name="regex_match_tuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.regexMatchTuple"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple">put_regex_match_tuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple">reset_regex_match_tuple</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_regex_match_tuple` <a name="put_regex_match_tuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple"></a>

```python
def put_regex_match_tuple(
  value: typing.Union[IResolvable, typing.List[WafregionalRegexMatchSetRegexMatchTuple]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_regex_match_tuple` <a name="reset_regex_match_tuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple"></a>

```python
def reset_regex_match_tuple() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple">regex_match_tuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput">regex_match_tuple_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `regex_match_tuple`<sup>Required</sup> <a name="regex_match_tuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple"></a>

```python
regex_match_tuple: WafregionalRegexMatchSetRegexMatchTupleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_match_tuple_input`<sup>Optional</sup> <a name="regex_match_tuple_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput"></a>

```python
regex_match_tuple_input: typing.Union[IResolvable, typing.List[WafregionalRegexMatchSetRegexMatchTuple]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRegexMatchSetConfig <a name="WafregionalRegexMatchSetConfig" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  regex_match_tuple: typing.Union[IResolvable, typing.List[WafregionalRegexMatchSetRegexMatchTuple]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple">regex_match_tuple</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]</code> | regex_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regex_match_tuple`<sup>Optional</sup> <a name="regex_match_tuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple"></a>

```python
regex_match_tuple: typing.Union[IResolvable, typing.List[WafregionalRegexMatchSetRegexMatchTuple]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}

---

### WafregionalRegexMatchSetRegexMatchTuple <a name="WafregionalRegexMatchSetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple(
  field_to_match: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch,
  regex_pattern_set_id: str,
  text_transformation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId">regex_pattern_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation">text_transformation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}. |

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch"></a>

```python
field_to_match: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#field_to_match WafregionalRegexMatchSet#field_to_match}

---

##### `regex_pattern_set_id`<sup>Required</sup> <a name="regex_pattern_set_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId"></a>

```python
regex_pattern_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}.

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}.

---

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatch <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


### WafregionalRegexMatchSetRegexMatchTupleList <a name="WafregionalRegexMatchSetRegexMatchTupleList" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalRegexMatchSetRegexMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalRegexMatchSetRegexMatchTuple]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>]]

---


### WafregionalRegexMatchSetRegexMatchTupleOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_regex_match_set

wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  type: str,
  data: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput">regex_pattern_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput">text_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId">regex_pattern_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation">text_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a>

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---

##### `regex_pattern_set_id_input`<sup>Optional</sup> <a name="regex_pattern_set_id_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput"></a>

```python
regex_pattern_set_id_input: str
```

- *Type:* str

---

##### `text_transformation_input`<sup>Optional</sup> <a name="text_transformation_input" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput"></a>

```python
text_transformation_input: str
```

- *Type:* str

---

##### `regex_pattern_set_id`<sup>Required</sup> <a name="regex_pattern_set_id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId"></a>

```python
regex_pattern_set_id: str
```

- *Type:* str

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalRegexMatchSetRegexMatchTuple, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>, cdktf.IResolvable]

---



