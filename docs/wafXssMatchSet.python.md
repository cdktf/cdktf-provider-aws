# `wafXssMatchSet` Submodule <a name="`wafXssMatchSet` Submodule" id="@cdktf/provider-aws.wafXssMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafXssMatchSet <a name="WafXssMatchSet" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set aws_waf_xss_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSet(
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
  xss_match_tuples: typing.Union[IResolvable, typing.List[WafXssMatchSetXssMatchTuples]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#name WafXssMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#id WafXssMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.xssMatchTuples">xss_match_tuples</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]</code> | xss_match_tuples block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#name WafXssMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#id WafXssMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xss_match_tuples`<sup>Optional</sup> <a name="xss_match_tuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.xssMatchTuples"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]

xss_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#xss_match_tuples WafXssMatchSet#xss_match_tuples}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.putXssMatchTuples">put_xss_match_tuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetXssMatchTuples">reset_xss_match_tuples</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_xss_match_tuples` <a name="put_xss_match_tuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.putXssMatchTuples"></a>

```python
def put_xss_match_tuples(
  value: typing.Union[IResolvable, typing.List[WafXssMatchSetXssMatchTuples]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.putXssMatchTuples.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_xss_match_tuples` <a name="reset_xss_match_tuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetXssMatchTuples"></a>

```python
def reset_xss_match_tuples() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuples">xss_match_tuples</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList">WafXssMatchSetXssMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuplesInput">xss_match_tuples_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `xss_match_tuples`<sup>Required</sup> <a name="xss_match_tuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuples"></a>

```python
xss_match_tuples: WafXssMatchSetXssMatchTuplesList
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList">WafXssMatchSetXssMatchTuplesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `xss_match_tuples_input`<sup>Optional</sup> <a name="xss_match_tuples_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuplesInput"></a>

```python
xss_match_tuples_input: typing.Union[IResolvable, typing.List[WafXssMatchSetXssMatchTuples]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafXssMatchSetConfig <a name="WafXssMatchSetConfig" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  xss_match_tuples: typing.Union[IResolvable, typing.List[WafXssMatchSetXssMatchTuples]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#name WafXssMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#id WafXssMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.xssMatchTuples">xss_match_tuples</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]</code> | xss_match_tuples block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#name WafXssMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#id WafXssMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xss_match_tuples`<sup>Optional</sup> <a name="xss_match_tuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.xssMatchTuples"></a>

```python
xss_match_tuples: typing.Union[IResolvable, typing.List[WafXssMatchSetXssMatchTuples]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]

xss_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#xss_match_tuples WafXssMatchSet#xss_match_tuples}

---

### WafXssMatchSetXssMatchTuples <a name="WafXssMatchSetXssMatchTuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSetXssMatchTuples(
  field_to_match: WafXssMatchSetXssMatchTuplesFieldToMatch,
  text_transformation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.textTransformation">text_transformation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#text_transformation WafXssMatchSet#text_transformation}. |

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.fieldToMatch"></a>

```python
field_to_match: WafXssMatchSetXssMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#field_to_match WafXssMatchSet#field_to_match}

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#text_transformation WafXssMatchSet#text_transformation}.

---

### WafXssMatchSetXssMatchTuplesFieldToMatch <a name="WafXssMatchSetXssMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#type WafXssMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#data WafXssMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#type WafXssMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#data WafXssMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference <a name="WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: WafXssMatchSetXssMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

---


### WafXssMatchSetXssMatchTuplesList <a name="WafXssMatchSetXssMatchTuplesList" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSetXssMatchTuplesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafXssMatchSetXssMatchTuplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafXssMatchSetXssMatchTuples]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>]]

---


### WafXssMatchSetXssMatchTuplesOutputReference <a name="WafXssMatchSetXssMatchTuplesOutputReference" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_xss_match_set

wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  type: str,
  data: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#type WafXssMatchSet#type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#data WafXssMatchSet#data}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference">WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformationInput">text_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformation">text_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference">WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference</a>

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: WafXssMatchSetXssMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

---

##### `text_transformation_input`<sup>Optional</sup> <a name="text_transformation_input" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformationInput"></a>

```python
text_transformation_input: str
```

- *Type:* str

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafXssMatchSetXssMatchTuples, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples">WafXssMatchSetXssMatchTuples</a>, cdktf.IResolvable]

---



