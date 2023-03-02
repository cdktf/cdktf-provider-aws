# `wafByteMatchSet` Submodule <a name="`wafByteMatchSet` Submodule" id="@cdktf/provider-aws.wafByteMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafByteMatchSet <a name="WafByteMatchSet" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set aws_waf_byte_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSet(
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
  byte_match_tuples: typing.Union[IResolvable, typing.List[WafByteMatchSetByteMatchTuples]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#name WafByteMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.byteMatchTuples">byte_match_tuples</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]</code> | byte_match_tuples block. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#id WafByteMatchSet#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#name WafByteMatchSet#name}.

---

##### `byte_match_tuples`<sup>Optional</sup> <a name="byte_match_tuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.byteMatchTuples"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]

byte_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#byte_match_tuples WafByteMatchSet#byte_match_tuples}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#id WafByteMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.putByteMatchTuples">put_byte_match_tuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetByteMatchTuples">reset_byte_match_tuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_byte_match_tuples` <a name="put_byte_match_tuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.putByteMatchTuples"></a>

```python
def put_byte_match_tuples(
  value: typing.Union[IResolvable, typing.List[WafByteMatchSetByteMatchTuples]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.putByteMatchTuples.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]

---

##### `reset_byte_match_tuples` <a name="reset_byte_match_tuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetByteMatchTuples"></a>

```python
def reset_byte_match_tuples() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuples">byte_match_tuples</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList">WafByteMatchSetByteMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuplesInput">byte_match_tuples_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `byte_match_tuples`<sup>Required</sup> <a name="byte_match_tuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuples"></a>

```python
byte_match_tuples: WafByteMatchSetByteMatchTuplesList
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList">WafByteMatchSetByteMatchTuplesList</a>

---

##### `byte_match_tuples_input`<sup>Optional</sup> <a name="byte_match_tuples_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuplesInput"></a>

```python
byte_match_tuples_input: typing.Union[IResolvable, typing.List[WafByteMatchSetByteMatchTuples]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafByteMatchSetByteMatchTuples <a name="WafByteMatchSetByteMatchTuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSetByteMatchTuples(
  field_to_match: WafByteMatchSetByteMatchTuplesFieldToMatch,
  positional_constraint: str,
  text_transformation: str,
  target_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.positionalConstraint">positional_constraint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#positional_constraint WafByteMatchSet#positional_constraint}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.textTransformation">text_transformation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#text_transformation WafByteMatchSet#text_transformation}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.targetString">target_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#target_string WafByteMatchSet#target_string}. |

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.fieldToMatch"></a>

```python
field_to_match: WafByteMatchSetByteMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#field_to_match WafByteMatchSet#field_to_match}

---

##### `positional_constraint`<sup>Required</sup> <a name="positional_constraint" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.positionalConstraint"></a>

```python
positional_constraint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#positional_constraint WafByteMatchSet#positional_constraint}.

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#text_transformation WafByteMatchSet#text_transformation}.

---

##### `target_string`<sup>Optional</sup> <a name="target_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.targetString"></a>

```python
target_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#target_string WafByteMatchSet#target_string}.

---

### WafByteMatchSetByteMatchTuplesFieldToMatch <a name="WafByteMatchSetByteMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#type WafByteMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#data WafByteMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#type WafByteMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#data WafByteMatchSet#data}.

---

### WafByteMatchSetConfig <a name="WafByteMatchSetConfig" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  byte_match_tuples: typing.Union[IResolvable, typing.List[WafByteMatchSetByteMatchTuples]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#name WafByteMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.byteMatchTuples">byte_match_tuples</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]</code> | byte_match_tuples block. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#id WafByteMatchSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#name WafByteMatchSet#name}.

---

##### `byte_match_tuples`<sup>Optional</sup> <a name="byte_match_tuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.byteMatchTuples"></a>

```python
byte_match_tuples: typing.Union[IResolvable, typing.List[WafByteMatchSetByteMatchTuples]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]

byte_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#byte_match_tuples WafByteMatchSet#byte_match_tuples}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#id WafByteMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference <a name="WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: WafByteMatchSetByteMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

---


### WafByteMatchSetByteMatchTuplesList <a name="WafByteMatchSetByteMatchTuplesList" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSetByteMatchTuplesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafByteMatchSetByteMatchTuplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafByteMatchSetByteMatchTuples]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>]]

---


### WafByteMatchSetByteMatchTuplesOutputReference <a name="WafByteMatchSetByteMatchTuplesOutputReference" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_byte_match_set

wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resetTargetString">reset_target_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  type: str,
  data: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#type WafByteMatchSet#type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#data WafByteMatchSet#data}.

---

##### `reset_target_string` <a name="reset_target_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resetTargetString"></a>

```python
def reset_target_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput">positional_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput">target_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput">text_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint">positional_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetString">target_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformation">text_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a>

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: WafByteMatchSetByteMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `positional_constraint_input`<sup>Optional</sup> <a name="positional_constraint_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput"></a>

```python
positional_constraint_input: str
```

- *Type:* str

---

##### `target_string_input`<sup>Optional</sup> <a name="target_string_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput"></a>

```python
target_string_input: str
```

- *Type:* str

---

##### `text_transformation_input`<sup>Optional</sup> <a name="text_transformation_input" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput"></a>

```python
text_transformation_input: str
```

- *Type:* str

---

##### `positional_constraint`<sup>Required</sup> <a name="positional_constraint" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint"></a>

```python
positional_constraint: str
```

- *Type:* str

---

##### `target_string`<sup>Required</sup> <a name="target_string" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetString"></a>

```python
target_string: str
```

- *Type:* str

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafByteMatchSetByteMatchTuples, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples">WafByteMatchSetByteMatchTuples</a>, cdktf.IResolvable]

---



