# `wafSizeConstraintSet` Submodule <a name="`wafSizeConstraintSet` Submodule" id="@cdktf/provider-aws.wafSizeConstraintSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSizeConstraintSet <a name="WafSizeConstraintSet" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set aws_waf_size_constraint_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSet(
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
  size_constraints: typing.Union[IResolvable, typing.List[WafSizeConstraintSetSizeConstraints]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#name WafSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#id WafSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.sizeConstraints">size_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]</code> | size_constraints block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#name WafSizeConstraintSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#id WafSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `size_constraints`<sup>Optional</sup> <a name="size_constraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.sizeConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size_constraints WafSizeConstraintSet#size_constraints}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.putSizeConstraints">put_size_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetSizeConstraints">reset_size_constraints</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_size_constraints` <a name="put_size_constraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.putSizeConstraints"></a>

```python
def put_size_constraints(
  value: typing.Union[IResolvable, typing.List[WafSizeConstraintSetSizeConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.putSizeConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_size_constraints` <a name="reset_size_constraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetSizeConstraints"></a>

```python
def reset_size_constraints() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraints">size_constraints</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList">WafSizeConstraintSetSizeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraintsInput">size_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `size_constraints`<sup>Required</sup> <a name="size_constraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraints"></a>

```python
size_constraints: WafSizeConstraintSetSizeConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList">WafSizeConstraintSetSizeConstraintsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `size_constraints_input`<sup>Optional</sup> <a name="size_constraints_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraintsInput"></a>

```python
size_constraints_input: typing.Union[IResolvable, typing.List[WafSizeConstraintSetSizeConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafSizeConstraintSetConfig <a name="WafSizeConstraintSetConfig" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  size_constraints: typing.Union[IResolvable, typing.List[WafSizeConstraintSetSizeConstraints]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#name WafSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#id WafSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.sizeConstraints">size_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]</code> | size_constraints block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#name WafSizeConstraintSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#id WafSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `size_constraints`<sup>Optional</sup> <a name="size_constraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.sizeConstraints"></a>

```python
size_constraints: typing.Union[IResolvable, typing.List[WafSizeConstraintSetSizeConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size_constraints WafSizeConstraintSet#size_constraints}

---

### WafSizeConstraintSetSizeConstraints <a name="WafSizeConstraintSetSizeConstraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints(
  comparison_operator: str,
  field_to_match: WafSizeConstraintSetSizeConstraintsFieldToMatch,
  size: typing.Union[int, float],
  text_transformation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#comparison_operator WafSizeConstraintSet#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size WafSizeConstraintSet#size}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.textTransformation">text_transformation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#text_transformation WafSizeConstraintSet#text_transformation}. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#comparison_operator WafSizeConstraintSet#comparison_operator}.

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.fieldToMatch"></a>

```python
field_to_match: WafSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#field_to_match WafSizeConstraintSet#field_to_match}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size WafSizeConstraintSet#size}.

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#text_transformation WafSizeConstraintSet#text_transformation}.

---

### WafSizeConstraintSetSizeConstraintsFieldToMatch <a name="WafSizeConstraintSetSizeConstraintsFieldToMatch" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#type WafSizeConstraintSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#data WafSizeConstraintSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#type WafSizeConstraintSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#data WafSizeConstraintSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference <a name="WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: WafSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


### WafSizeConstraintSetSizeConstraintsList <a name="WafSizeConstraintSetSizeConstraintsList" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafSizeConstraintSetSizeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafSizeConstraintSetSizeConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>]]

---


### WafSizeConstraintSetSizeConstraintsOutputReference <a name="WafSizeConstraintSetSizeConstraintsOutputReference" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import waf_size_constraint_set

wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  type: str,
  data: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#type WafSizeConstraintSet#type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#data WafSizeConstraintSet#data}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput">text_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation">text_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: WafSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_transformation_input`<sup>Optional</sup> <a name="text_transformation_input" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput"></a>

```python
text_transformation_input: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafSizeConstraintSetSizeConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>, cdktf.IResolvable]

---



