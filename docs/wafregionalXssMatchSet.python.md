# `wafregionalXssMatchSet` Submodule <a name="`wafregionalXssMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalXssMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalXssMatchSet <a name="WafregionalXssMatchSet" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set aws_wafregional_xss_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSet(
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
  xss_match_tuple: typing.Union[IResolvable, typing.List[WafregionalXssMatchSetXssMatchTuple]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#name WafregionalXssMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#id WafregionalXssMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.xssMatchTuple">xss_match_tuple</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]</code> | xss_match_tuple block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#name WafregionalXssMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#id WafregionalXssMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xss_match_tuple`<sup>Optional</sup> <a name="xss_match_tuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.xssMatchTuple"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]

xss_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.putXssMatchTuple">put_xss_match_tuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetXssMatchTuple">reset_xss_match_tuple</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_xss_match_tuple` <a name="put_xss_match_tuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.putXssMatchTuple"></a>

```python
def put_xss_match_tuple(
  value: typing.Union[IResolvable, typing.List[WafregionalXssMatchSetXssMatchTuple]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.putXssMatchTuple.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_xss_match_tuple` <a name="reset_xss_match_tuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetXssMatchTuple"></a>

```python
def reset_xss_match_tuple() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTuple">xss_match_tuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList">WafregionalXssMatchSetXssMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTupleInput">xss_match_tuple_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `xss_match_tuple`<sup>Required</sup> <a name="xss_match_tuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTuple"></a>

```python
xss_match_tuple: WafregionalXssMatchSetXssMatchTupleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList">WafregionalXssMatchSetXssMatchTupleList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `xss_match_tuple_input`<sup>Optional</sup> <a name="xss_match_tuple_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTupleInput"></a>

```python
xss_match_tuple_input: typing.Union[IResolvable, typing.List[WafregionalXssMatchSetXssMatchTuple]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalXssMatchSetConfig <a name="WafregionalXssMatchSetConfig" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  xss_match_tuple: typing.Union[IResolvable, typing.List[WafregionalXssMatchSetXssMatchTuple]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#name WafregionalXssMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#id WafregionalXssMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.xssMatchTuple">xss_match_tuple</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]</code> | xss_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#name WafregionalXssMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#id WafregionalXssMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xss_match_tuple`<sup>Optional</sup> <a name="xss_match_tuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.xssMatchTuple"></a>

```python
xss_match_tuple: typing.Union[IResolvable, typing.List[WafregionalXssMatchSetXssMatchTuple]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]

xss_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}

---

### WafregionalXssMatchSetXssMatchTuple <a name="WafregionalXssMatchSetXssMatchTuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple(
  field_to_match: WafregionalXssMatchSetXssMatchTupleFieldToMatch,
  text_transformation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.textTransformation">text_transformation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#text_transformation WafregionalXssMatchSet#text_transformation}. |

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.fieldToMatch"></a>

```python
field_to_match: WafregionalXssMatchSetXssMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#field_to_match WafregionalXssMatchSet#field_to_match}

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#text_transformation WafregionalXssMatchSet#text_transformation}.

---

### WafregionalXssMatchSetXssMatchTupleFieldToMatch <a name="WafregionalXssMatchSetXssMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#type WafregionalXssMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#data WafregionalXssMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#type WafregionalXssMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#data WafregionalXssMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference <a name="WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalXssMatchSetXssMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

---


### WafregionalXssMatchSetXssMatchTupleList <a name="WafregionalXssMatchSetXssMatchTupleList" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalXssMatchSetXssMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalXssMatchSetXssMatchTuple]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>]]

---


### WafregionalXssMatchSetXssMatchTupleOutputReference <a name="WafregionalXssMatchSetXssMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_xss_match_set

wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  type: str,
  data: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#type WafregionalXssMatchSet#type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#data WafregionalXssMatchSet#data}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference">WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformationInput">text_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformation">text_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference">WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference</a>

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: WafregionalXssMatchSetXssMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

---

##### `text_transformation_input`<sup>Optional</sup> <a name="text_transformation_input" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformationInput"></a>

```python
text_transformation_input: str
```

- *Type:* str

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalXssMatchSetXssMatchTuple, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>, cdktf.IResolvable]

---



