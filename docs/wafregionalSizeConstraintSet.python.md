# `wafregionalSizeConstraintSet` Submodule <a name="`wafregionalSizeConstraintSet` Submodule" id="@cdktf/provider-aws.wafregionalSizeConstraintSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalSizeConstraintSet <a name="WafregionalSizeConstraintSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set aws_wafregional_size_constraint_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet(
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
  size_constraints: typing.Union[IResolvable, typing.List[WafregionalSizeConstraintSetSizeConstraints]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.sizeConstraints">size_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]</code> | size_constraints block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `size_constraints`<sup>Optional</sup> <a name="size_constraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.sizeConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size_constraints WafregionalSizeConstraintSet#size_constraints}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints">put_size_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetSizeConstraints">reset_size_constraints</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_size_constraints` <a name="put_size_constraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints"></a>

```python
def put_size_constraints(
  value: typing.Union[IResolvable, typing.List[WafregionalSizeConstraintSetSizeConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_size_constraints` <a name="reset_size_constraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetSizeConstraints"></a>

```python
def reset_size_constraints() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraints">size_constraints</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList">WafregionalSizeConstraintSetSizeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraintsInput">size_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `size_constraints`<sup>Required</sup> <a name="size_constraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraints"></a>

```python
size_constraints: WafregionalSizeConstraintSetSizeConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList">WafregionalSizeConstraintSetSizeConstraintsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `size_constraints_input`<sup>Optional</sup> <a name="size_constraints_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraintsInput"></a>

```python
size_constraints_input: typing.Union[IResolvable, typing.List[WafregionalSizeConstraintSetSizeConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalSizeConstraintSetConfig <a name="WafregionalSizeConstraintSetConfig" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  size_constraints: typing.Union[IResolvable, typing.List[WafregionalSizeConstraintSetSizeConstraints]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.sizeConstraints">size_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]</code> | size_constraints block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `size_constraints`<sup>Optional</sup> <a name="size_constraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.sizeConstraints"></a>

```python
size_constraints: typing.Union[IResolvable, typing.List[WafregionalSizeConstraintSetSizeConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size_constraints WafregionalSizeConstraintSet#size_constraints}

---

### WafregionalSizeConstraintSetSizeConstraints <a name="WafregionalSizeConstraintSetSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints(
  comparison_operator: str,
  field_to_match: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch,
  size: typing.Union[int, float],
  text_transformation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#comparison_operator WafregionalSizeConstraintSet#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size WafregionalSizeConstraintSet#size}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.textTransformation">text_transformation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#text_transformation WafregionalSizeConstraintSet#text_transformation}. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#comparison_operator WafregionalSizeConstraintSet#comparison_operator}.

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.fieldToMatch"></a>

```python
field_to_match: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#field_to_match WafregionalSizeConstraintSet#field_to_match}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size WafregionalSizeConstraintSet#size}.

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#text_transformation WafregionalSizeConstraintSet#text_transformation}.

---

### WafregionalSizeConstraintSetSizeConstraintsFieldToMatch <a name="WafregionalSizeConstraintSetSizeConstraintsFieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference <a name="WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


### WafregionalSizeConstraintSetSizeConstraintsList <a name="WafregionalSizeConstraintSetSizeConstraintsList" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalSizeConstraintSetSizeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalSizeConstraintSetSizeConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>]]

---


### WafregionalSizeConstraintSetSizeConstraintsOutputReference <a name="WafregionalSizeConstraintSetSizeConstraintsOutputReference" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_size_constraint_set

wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  type: str,
  data: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput">text_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation">text_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_transformation_input`<sup>Optional</sup> <a name="text_transformation_input" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput"></a>

```python
text_transformation_input: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `text_transformation`<sup>Required</sup> <a name="text_transformation" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation"></a>

```python
text_transformation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalSizeConstraintSetSizeConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>, cdktf.IResolvable]

---



